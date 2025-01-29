import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Export configuration
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/ems/' : '/',  // Dynamic base path
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optional: modify chunking behavior if necessary
      },
    },
  },
});