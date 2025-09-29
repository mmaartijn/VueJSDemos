import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // vue.config.js (for Vue CLI)
  server: {
    proxy: {
      '/hue-proxy': {
        target: 'https://192.168.0.30', // e.g., https://192.168.1.100
        changeOrigin: true, // Needed for virtual hosting
        secure: false,      // IMPORTANT: Ignores the invalid SSL certificate
        rewrite: path => path.replace(/^\/hue-proxy/, '')
      }
    }
  }
});