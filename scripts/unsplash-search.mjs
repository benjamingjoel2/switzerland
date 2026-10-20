// Searches Unsplash for each query and caches raw results in .cache/search.
// Resumable: cached queries are skipped; waits out the hourly rate limit.
import { mkdirSync, existsSync, writeFileSync, readFileSync } from 'node:fs';

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) throw new Error('UNSPLASH_ACCESS_KEY is not set');
const queries = JSON.parse(readFileSync(new URL('./queries.json', import.meta.url)));
mkdirSync('.cache/search', { recursive: true });
const slug = (q) => q.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const q of queries) {
  const file = `.cache/search/${slug(q)}.json`;
  if (existsSync(file)) continue;
  for (;;) {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?per_page=30&query=${encodeURIComponent(q)}`,
      { headers: { Authorization: `Client-ID ${KEY}`, 'Accept-Version': 'v1' } },
    );
    if (res.ok) {
      writeFileSync(file, await res.text());
      console.log(`ok  ${q}  (remaining ${res.headers.get('x-ratelimit-remaining')})`);
      break;
    }
    console.log(`${res.status} on "${q}" — waiting 5 min`);
    await sleep(5 * 60 * 1000);
  }
}
console.log('done');
