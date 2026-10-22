import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  redirects: {
    '/admin': '/keystatic',
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    keystatic(),
  ],
});

