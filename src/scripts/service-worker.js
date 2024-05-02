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
    console.log('Push event', event);

    const notificationTitle = 'News PWA';
    const notificationBody = 'Вы подключили уведомления!';
    const notificationIcon = 'icon.png';

    event.waitUntil(
        self.registration.showNotification(notificationTitle, {
            body: notificationBody,
            icon: notificationIcon
        })
    );
});
