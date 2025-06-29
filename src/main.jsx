import React from 'react'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fontsource/poppins";     
import "@fontsource/roboto";
import "@fontsource/open-sans";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import './assets/css/style.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
