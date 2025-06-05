import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/', // ★この行は削除するか、このように設定
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})