import React from 'react';
import ReactDOM from 'react-dom/client';
import RootPage from './components/RootPage';
import './index.css';
import 'prism-theme-vars/base.css';
import 'prism-theme-vars/themes/vitesse-dark.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>
);
