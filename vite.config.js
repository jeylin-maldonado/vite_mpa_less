import { defineConfig } from 'vite'

export default defineConfig({
  base: '/vite_mpa_less/',   // ← Esta línea es la que faltaba
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        about: 'about.html'
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
