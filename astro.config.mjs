import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/blog',
  vite: {
    build: {
      rollupOptions: {
        external: ['#home-directory', 'path', 'fs', 'url', 'module']
      }
    },
    define: {
      global: 'window'
    }
  },
});
