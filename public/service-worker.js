var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/src/components/Main.js',
  '/src/components/newFeeling.js',
  '/src/navigation/navigation.js',
  '/src/App.js',
  '/src/index.js',
  '/public/favicon.ico',
  '/public/logo192.png',
  '/public/logo512.png',
  '/public/manifest.json'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache open!');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
