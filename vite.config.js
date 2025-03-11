import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@routes': '/src/routes',
      '@pages': '/src/pages',
      '@context': '/src/context',
      '@server': '/src/server',
      '@utils': './src/utils',
      '@styles': '/src/styles'
    }
  }
})