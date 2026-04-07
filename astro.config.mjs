import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://saintpetehairextensions.com',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/variables.css";`
        }
      }
    }
  }
});
