import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'jsx'],
      'text/javascript': ['js', 'jsx']
    }}
})