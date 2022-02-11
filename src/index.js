import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Dienstleistungen } from './dienstleistungen';
import { Kontakt } from './kontakt';
import { Impressum } from './impressum';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/matthiasmelkautomobile">
      <Routes>
        <Route index element={<App />} />
        <Route path="/dienstleistungen" element={<Dienstleistungen />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
