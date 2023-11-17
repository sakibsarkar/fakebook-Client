import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.imgbb.com',
        changeOrigin: true,
        // Optionally, you can set the headers for your specific origin.
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:5173',
        },
      },
    },
  },
})


