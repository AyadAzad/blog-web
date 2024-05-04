import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({

    server: {
        proxy: {
            '/send_mail': {
                target: 'http://localhost:9000', // Your Flask backend URL
                changeOrigin: true,
            },
        },
    },
  plugins: [
      react()
  ],
    optimizeDeps: {
        include: ['react-markdown'],
    },
})
