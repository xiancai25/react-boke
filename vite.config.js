import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 👇 用这个替代 __dirname，完美兼容 ES 模块
      '@': new URL('./src', import.meta.url).pathname
    }
  }
})
