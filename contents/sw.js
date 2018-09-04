importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

// Uncomment for debugging
// workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.routing.registerRoute(
  // Cache typekit bootstrap and font files
  /^https:\/\/(use|p)\.typekit\.net\/.+$/,
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'typekit-cache',
    plugins: [
      // Allow opaque responses
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200] // YOLO
      }),
    ],
  })
);

workbox.routing.registerRoute(
  // Cache immutable files forever
  /\/immutable\//,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    cacheName: 'immutable-file-cache',
  })
);

// Avoid the doc cache during local dev, because the file
// generation never wins against the 1 second deadline.
if (!(/localhost/.test(origin))) {
  workbox.routing.registerRoute(
    // Prefer the network but if it doesn't respond within 1 seconds,
    // fallback to a doc if we have a cached version that is max
    // 3 days old.
    // Basically that means that the schedule should load offline for the
    // duration of the conference.
    /(\/|\.html)$/,
    // Use the network unless things are slow
    workbox.strategies.networkFirst({
      cacheName: 'doc-cache',
      networkTimeoutSeconds: 1,
      plugins: [
        new workbox.expiration.Plugin({
          // Cache for a maximum of three days
          maxAgeSeconds: 3 * 24 * 60 * 60,
        })
      ],
    })
  );
}