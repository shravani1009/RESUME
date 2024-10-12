import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base URL. Use '/' for root domain or adjust if deploying to a subfolder
  base: '/',  // Change to '/resume/' if deploying under a subpath like /resume/
  
  build: {
    outDir: 'dist',          // Ensures the build output goes to the 'dist' folder
    emptyOutDir: true,       // Clears the 'dist' folder before rebuilding
    
    // Optional: Ensure minification and modern output formats
    assetsDir: 'assets',     // Folder for assets like JS, CSS
    rollupOptions: {
      output: {
        manualChunks: undefined, // Can help with optimizing large builds
      }
    }
  }
});