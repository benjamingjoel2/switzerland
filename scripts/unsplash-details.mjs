// Fetches /photos/:id for the given ids (location, exif) into .cache/photo. Resumable.
import { mkdirSync, existsSync, writeFileSync } from 'node:fs';

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) throw new Error('UNSPLASH_ACCESS_KEY is not set');
mkdirSync('.cache/photo', { recursive: true });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const id of process.argv.slice(2)) {
  const file = `.cache/photo/${id}.json`;
  if (existsSync(file)) continue;
  for (;;) {
    const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
      headers: { Authorization: `Client-ID ${KEY}`, 'Accept-Version': 'v1' },
    });
    if (res.ok) {
      const p = await res.json();
      writeFileSync(file, JSON.stringify(p));
      console.log(`ok ${id} | ${p.location?.name ?? '-'} | ${p.location?.country ?? '-'}`);
      break;
    }
    console.log(`${res.status} on ${id} — waiting 5 min`);
    await sleep(5 * 60 * 1000);
  }
}
console.log('done');
