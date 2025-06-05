import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ★このパスが正しいことを確認
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})