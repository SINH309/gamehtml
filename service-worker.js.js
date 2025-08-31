const CACHE_NAME = "study-game-cache-v1";
const urlsToCache = [
  "game.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// Cài đặt SW & cache file
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Lấy dữ liệu từ cache trước, nếu chưa có thì fetch mạng
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

