import typography from '@tailwindcss/typography';
import animatePlugin from 'tailwindcss-animate';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    // 设置容器默认居中
    container: {
      center: true
    },
    extend: {
      height: {
        // 考虑手机浏览器的地址栏
        screen: ['100vh', '100dvh']
      }
    }
  },

  daisyui: {
    themes: ['emerald', 'dracula']
  },

  plugins: [typography, animatePlugin, daisyui]
};

