import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

/**
 * Punto de entrada de la aplicación React.
 * Este archivo es responsable de inicializar el árbol de componentes
 * y montarlo en el elemento root del DOM.
 * 
 * El uso de createRoot permite el modo concurrente de React 18,
 * lo que habilita características como concurrent rendering y
 * transiciones de estado fluidas.
 */
const container: HTMLElement | null = document.getElementById('root');

if (!container) {
  throw new Error('No se encontró el elemento root en el DOM');
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registro del service worker para producción (PWA)
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar Service Worker:', error);
      });
  });
}

// Tipos globales para el DOM
declare global {
  interface Window {
    serviceWorker?: ServiceWorkerContainer;
  }
}

// Exportación vacía para indicar que es un módulo
export {};