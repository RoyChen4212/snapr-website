self.addEventListener('install', () => self.skipWaiting()); // eslint-disable-line

self.addEventListener('activate', () => { // eslint-disable-line
  self.registration.unregister(); // eslint-disable-line
  self.clients.matchAll({ type: 'window' }).then(clients => { // eslint-disable-line
    for (const client of clients) { // eslint-disable-line
      client.navigate(client.url);
    }
  });
});
