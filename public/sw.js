const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/static/js/bundle.js',
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/logos/company_logo.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.match(event.request)
          .then(response => {
            return response || fetch(event.request)
              .then(fetchResponse => {
                cache.put(event.request, fetchResponse.clone());
                return fetchResponse;
              });
          });
      })
  );
});
