const notificationContainer = document.getElementById('notification-container');
const showNotificationButton = document.getElementById('showNotification');

showNotificationButton.addEventListener('click', () => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'Sample Notification!';
    notificationContainer.appendChild(notification); 
    notificationContainer.style.display = 'block'; 

    // To auto-hide notification after a few seconds:
    setTimeout(() => {
        notification.remove(); 
        if (notificationContainer.childElementCount === 0) {
            notificationContainer.style.display = 'none'; 
        }
    }, 3000); // Hide after 3 seconds
});