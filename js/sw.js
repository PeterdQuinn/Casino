self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('casino-app-cache').then((cache) => {
        return cache.addAll([
          '/index.html',
          '/manifest.json',
          '/css/styles.css',
          '/js/main.js',
          // Add all other necessary files for your app here
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  