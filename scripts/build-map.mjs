// Builds src/data/swiss-map.json: SVG paths for Switzerland (outline, canton borders,
// lakes) plus projected pin positions for each destination. Source: swiss-maps (WGS84).
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { feature, mesh } from 'topojson-client';
import { presimplify, quantile, simplify } from 'topojson-simplify';
import { geoMercator, geoPath } from 'd3-geo';

const require = createRequire(import.meta.url);
const raw = JSON.parse(readFileSync(require.resolve('swiss-maps/2026/ch-combined.json'), 'utf8'));
// Drop districts/municipalities, then simplify: keeps the shape crisp at ~1000px but small.
delete raw.objects.districts;
delete raw.objects.municipalities;
const pre = presimplify(raw);
const topo = simplify(pre, quantile(pre, 0.12));

const W = 1000;
const H = 640;
const country = feature(topo, topo.objects.country);
const projection = geoMercator().fitExtent([[24, 24], [W - 24, H - 24]], country);
const path = geoPath(projection).digits(0);

// Lat/lon of each destination's main town.
const pins = {
  zermatt: [46.0207, 7.7491],
  'jungfrau-region': [46.6242, 8.0414],
  lucerne: [47.0502, 8.3093],
  'lake-geneva': [46.4312, 6.9107],
  lugano: [46.0037, 8.9511],
  bern: [46.948, 7.4474],
  zurich: [47.3769, 8.5417],
  'st-moritz': [46.4908, 9.8355],
  appenzell: [47.331, 9.409],
  basel: [47.5596, 7.5886],
};

// Only lakes large enough to read at this scale (Geneva, Constance, Neuchâtel, Lucerne, …).
const lakes = feature(topo, topo.objects.lakes).features.filter((f) => path.area(f) > 60).map((f) => path(f));
const out = {
  width: W,
  height: H,
  country: path(country),
  cantons: path(mesh(topo, topo.objects.cantons, (a, b) => a !== b)),
  lakes: lakes.filter(Boolean),
  pins: Object.fromEntries(
    Object.entries(pins).map(([id, [lat, lon]]) => {
      const [x, y] = projection([lon, lat]);
      return [id, { x: +x.toFixed(1), y: +y.toFixed(1) }];
    }),
  ),
};
writeFileSync('src/data/swiss-map.json', JSON.stringify(out) + '\n');
console.log(`map: ${(JSON.stringify(out).length / 1024).toFixed(0)} KB, ${out.lakes.length} lakes`);
