import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
    emptyOutDir: true, // Clears the outDir before building
  },
});
