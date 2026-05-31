import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        // target: 'http://localhost:5000',
        target: 'https://freelance-i6p4.onrender.com',
        changeOrigin: true,
      },
      '/socket.io': {
        // target: 'http://localhost:5000',
        target: 'https://freelance-i6p4.onrender.com',
        ws: true,
      },
    },
  },
})
