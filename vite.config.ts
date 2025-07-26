import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Ensure robots.txt and sitemap.xml are copied to dist
    assetsInclude: ['**/*.xml', '**/*.txt'],
    rollupOptions: {
      output: {
        // Keep robots.txt and sitemap.xml at root
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'robots.txt' || assetInfo.name === 'sitemap.xml') {
            return '[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
