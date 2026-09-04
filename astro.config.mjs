// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Static output hosted on Vercel Hobby: https://ashenk-portfolio.vercel.app/
export default defineConfig({
  site: 'https://ashenk-portfolio.vercel.app',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});