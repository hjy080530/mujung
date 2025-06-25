/** @jsxImportSource @emotion/react */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';
import globalStyles from './styles/global';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
