// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build
export default defineConfig({
  output: 'static', // Forces flat HTML compilation

  integrations: [react()],

  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    plugins: [tailwindcss()]
  },

  server: {
    host: true,
  },

  site: "https://abok-cymk.github.io",
  base: "/green-impact-innovators",
});
