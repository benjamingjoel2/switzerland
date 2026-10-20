// Pings each used photo's download_location, as the Unsplash API guidelines require
// when a photo is used. Resumable: tracked ids are stored in .cache/tracked.json.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) throw new Error('UNSPLASH_ACCESS_KEY is not set');
mkdirSync('.cache', { recursive: true });
const done = new Set(existsSync('.cache/tracked.json') ? JSON.parse(readFileSync('.cache/tracked.json', 'utf8')) : []);
const { photos } = JSON.parse(readFileSync('src/data/media.json', 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const p of Object.values(photos)) {
  if (done.has(p.id)) continue;
  for (;;) {
    const res = await fetch(p.downloadLocation, { headers: { Authorization: `Client-ID ${KEY}` } });
    if (res.ok) break;
    console.log(`${res.status} on ${p.id} — waiting 5 min`);
    await sleep(5 * 60 * 1000);
  }
  done.add(p.id);
  writeFileSync('.cache/tracked.json', JSON.stringify([...done]));
  console.log(`tracked ${p.id}`);
}
console.log('done');
