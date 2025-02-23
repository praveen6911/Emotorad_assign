import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  host: '0.0.0.0',
    port: 5173, // Adjust if needed
    allowedHosts: ['emotorad-assign-2.onrender.com'], 
})
