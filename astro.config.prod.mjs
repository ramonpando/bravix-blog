import { defineConfig } from 'astro/config';

// Production config without DecapCMS to avoid build issues
export default defineConfig({
  output: 'static',
  build: {
    outDir: 'dist'
  }
});