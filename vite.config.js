import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/weather1/', // This matches your GitHub repository name
  plugins: [react()],
});
