import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server:{
    port:5173,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8120',
        changeOrigin: true,
        rewrite:(path)=>path.replace(/^\/api/,"")
      }
    }
  },
  base:'/NightBook/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
