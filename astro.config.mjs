// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { esES } from '@clerk/localizations';
import clerk from "@clerk/astro";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [clerk({
    localization: esES
  })],
  adapter: node({
    mode: 'standalone'
  }),
  output: "server",
});