// service-worker.js
self.addEventListener('install', event => {
    console.log('Service worker installed');
});

self.addEventListener('activate', event => {
    console.log('Service worker activated');
});

self.addEventListener('fetch', event => {
    console.log('Fetch event', event);
});

self.addEventListener('push', event => {
    const payload = event.data.json();
    const notificationTitle = payload.title || 'News PWA';
    const notificationBody = payload.body || 'Вы подключили уведомления!';
    const notificationIcon = 'icon.png';

    event.waitUntil(
        self.registration.showNotification(notificationTitle, {
            body: notificationBody,
            icon: notificationIcon
        })
    );
});
