import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NO postcss import here

export default defineConfig({
  plugins: [react()],
})
