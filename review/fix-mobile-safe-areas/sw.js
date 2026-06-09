// Minimal service worker for PWA installability
globalThis.addEventListener('install', () => globalThis.skipWaiting());
globalThis.addEventListener('activate', (event) =>
	event.waitUntil(globalThis.clients.claim())
);
globalThis.addEventListener('fetch', () => {
});
