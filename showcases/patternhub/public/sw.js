/* eslint-env serviceworker */
// Minimal service worker for PWA installability
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) =>
	event.waitUntil(self.clients.claim())
);
self.addEventListener('fetch', () => {});
