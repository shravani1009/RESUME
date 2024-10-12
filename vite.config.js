import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // or adjust to a subpath if deploying under one
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});