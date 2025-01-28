import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/ems",  // Make sure the base is correctly set for GitHub Pages or deployment
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,  // Modify chunking behavior if needed
      },
    },
  },
})