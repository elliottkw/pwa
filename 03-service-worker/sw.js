// Ciclo de vida del SW

self.addEventListener('install', event => {
    // Descargar assets
    // Creamos un cache
    console.log('Installing Service Worker...');

    self.skipWaiting();
});

// Cuando el Service Worker toma el control de la aplicación.
self.addEventListener('activate', event => {
    // Borrar cache viejo
    console.log('Servicer Worker active and ready to control the app...');
});