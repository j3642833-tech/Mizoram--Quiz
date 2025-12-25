const CACHE_NAME = 'mizoram-quiz-v1';
const ASSETS = [
  './',
  './index.html',
  './quiz.html',
  './leaderboard.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/5690/5690559.png'
];

// Install Event: Caches all essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Event: Serves files from cache when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
