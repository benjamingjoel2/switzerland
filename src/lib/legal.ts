import { brand } from '../data/site';
import { legal } from '../data/legal';

/** Swiss Horizon's legal pages. The site stores nothing in the browser (no cookies, no local storage). */
export const legalPages = legal({
  brand: brand.name,
  email: brand.email,
  address: brand.address,
  processors: [{ name: 'Vercel', purpose: 'hosts this website' }],
});

export const getLegalPage = (slug: 'privacy' | 'terms' | 'cookies') => legalPages.find((p) => p.slug === slug)!;
