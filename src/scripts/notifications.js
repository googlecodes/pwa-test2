function requestNotificationPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showNotification();
            }
        });
    } else {
        alert('Notifications are not supported in your browser.');
    }
}

function showNotification() {
    const notificationTitle = 'News PWA';
    const notificationBody = 'Вы подключили уведомления!';
    const notificationIcon = 'icon.png';

    const notification = new Notification(notificationTitle, {
        body: notificationBody,
        icon: notificationIcon
    });
}