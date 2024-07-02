const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/static/js/bundle.js',
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/logos/company_logo.png',
];

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 