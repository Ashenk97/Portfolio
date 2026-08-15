// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Static output deploys to Cloudflare Pages or Vercel with zero paid services.
// After the first free deploy, set `site` to your Pages/Vercel URL.
export default defineConfig({
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});