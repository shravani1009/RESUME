import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // or '/resume/' if deploying under a subfolder
  build: {
    outDir: 'dist', // Correctly set to 'dist'
    emptyOutDir: true, // Clears the 'dist' folder before building
  },
});
