// Builds src/data/media.json from scripts/picks.json and the cached Unsplash responses.
// picks.json: slot -> [searchQuerySlug, resultIndex, placeLabel]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const picks = JSON.parse(readFileSync('scripts/picks.json', 'utf8'));
const photos = {};
const slots = {};

for (const [slot, [query, index, label]] of Object.entries(picks)) {
  const r = JSON.parse(readFileSync(`.cache/search/${query}.json`, 'utf8')).results[index];
  const detailFile = `.cache/photo/${r.id}.json`;
  const detail = existsSync(detailFile) ? JSON.parse(readFileSync(detailFile, 'utf8')) : null;
  slots[slot] = r.id;
  photos[r.id] ??= {
    id: r.id,
    raw: r.urls.raw,
    alt: (r.alt_description || label).replace(/^./, (c) => c.toUpperCase()) + ` — ${label}, Switzerland`,
    width: r.width,
    height: r.height,
    color: r.color,
    name: r.user.name,
    userUrl: r.user.links.html,
    pageUrl: r.links.html,
    location: label,
    downloadLocation: r.links.download_location,
    ...(detail?.location?.name ? { verifiedLocation: detail.location.name } : {}),
  };
}

writeFileSync('src/data/media.json', JSON.stringify({ photos, slots }, null, 1) + '\n');
console.log(`${Object.keys(slots).length} slots, ${Object.keys(photos).length} photos`);
