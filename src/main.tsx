import React from 'react';
import ReactDOM from 'react-dom/client';

import { configureNProgress } from '@/lib/nprogress.ts';
import App from '@/App.tsx';

// 自定义样式放在最后，以确保能覆盖前面的样式
import '@/index.css';

configureNProgress();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
