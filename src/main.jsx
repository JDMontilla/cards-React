import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Lenguajes from './datos/Lenguajes.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VistaLenguaje from './vistas/VistaLenguaje.jsx';

const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    {Lenguajes.map((len) => (
      <Route key={len.nombre} path={len.nombre} element={<VistaLenguaje len={len} />} />
    ))}
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </React.StrictMode>
);