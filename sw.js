self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/',
        '/index.html',
        '/index.js',
        '/style.css',
        '/icon-192x192.png',
        '/icon-256x256.png',
        '/icon-384x384.png',
        '/icon-512x512.png',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });