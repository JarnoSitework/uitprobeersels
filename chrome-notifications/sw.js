self.addEventListener('install', async (event) => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE)
        .then((cache) => cache.add(offlineFallbackPage))
    );
    });
// self.addEventListener('install', () => {
//     self.skipWaiting();
// });

self.addEventListener("push", (e) => {
    let payload = e.data.json();

  if (typeof payload === 'string' && payload === "" || Object.keys(payload).length === 0) {
    payload = {
      card: "Kiwibank Low Rate",
      title: "Account balance",
      tekst: "- saldo=",
      newValue: "€0",
      url: "https://www.kiwibank.co.nz/"
    };
  }

    const options = {
        requireInteraction: true,
        actions: [
            { "action": "view", "title": "View" },
            { "action": "close", "title": "Close" },
        ],
        data: {
            url: payload?.["url"],
        },
        icon: 'creditcard.jpeg',
        body: payload?.["card"] + ' ' + payload?.["tekst"] + ' ' + payload?.["newValue"],
    }

    e.wailUntil(self.registration.showNotification(payload?.["title"], options));
});

// self.addEventListener('push', function(event) {
//     const analyticsPromise = pushReceivedTracking();
//     const pushInfoPromise = fetch('/api/get-more-data')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         const title = response.data.userName + ' says...';
//         const message = response.data.message;

//         return self.registration.showNotification(title, {
//         body: message
//         });
//     });

//     const promiseChain = Promise.all([
//     analyticsPromise,
//     pushInfoPromise
//     ]);

//     event.waitUntil(promiseChain);
// });

self.addEventListener( "notificationclick", (e) => {
    let payload = e.notification.data;
    if(e.action === 'view') {
        clients.openWindow(payload?.['url']);
    }
});

// PWA
// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});