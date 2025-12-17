import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { ColorModeProvider } from './utils/ColorModeContext';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeProvider>
      <CssBaseline />
      <App />
    </ColorModeProvider>
  </React.StrictMode>
);