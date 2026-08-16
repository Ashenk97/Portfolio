// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Static output hosted on Vercel Hobby: https://portfolio-eight-neon-c4csi6obc0.vercel.app/
export default defineConfig({
  site: 'https://portfolio-eight-neon-c4csi6obc0.vercel.app',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});