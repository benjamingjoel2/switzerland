import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://swisshorizon.tourground.com',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'always' },
  // Fetch a page as soon as its link is hovered or tapped, so navigation feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  // Unsplash photos are downloaded at build time and served from this domain.
  image: { domains: ['images.unsplash.com'] },
});
