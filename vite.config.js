import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Counter-Down-Timer/', // Asegúrate de que esta ruta coincida con tu repositorio
  plugins: [react()]
});
