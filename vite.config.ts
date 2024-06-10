import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        ['module:@preact/signals-react-transform']
      ]
    }
  })],

  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
