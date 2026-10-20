import media from '../data/media.json';

export type Photo = {
  id: string;
  raw: string;
  alt: string;
  width: number;
  height: number;
  color: string;
  name: string;
  userUrl: string;
  pageUrl: string;
  location?: string;
};

const photos = media.photos as Record<string, Photo>;
const slots = media.slots as Record<string, string>;
const UTM = 'utm_source=swiss_horizon&utm_medium=referral';

export function photo(slot: string): Photo {
  const id = slots[slot];
  const p = id && photos[id];
  if (!p) throw new Error(`No photo assigned to media slot "${slot}"`);
  return p;
}

/** Unsplash imgix URL at a given width (and optional aspect ratio h/w). */
export function src(p: Photo, w: number, ratio?: number, q = 70) {
  const h = ratio ? `&h=${Math.round(w * ratio)}` : '';
  return `${p.raw}${p.raw.includes('?') ? '&' : '?'}auto=format&fit=crop&w=${w}${h}&q=${q}`;
}

export function srcset(p: Photo, widths: number[], ratio?: number) {
  return widths.map((w) => `${src(p, w, ratio)} ${w}w`).join(', ');
}

export const withUtm = (url: string) => `${url}${url.includes('?') ? '&' : '?'}${UTM}`;

/** Every photo credited once, in a stable order. */
export function credits() {
  const used = new Set(Object.values(slots));
  return [...used].map((id) => photos[id]).filter(Boolean);
}
