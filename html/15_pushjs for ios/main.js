document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('notifyButton');
  
    button.addEventListener('click', function() {
      if (!('serviceWorker' in navigator)) {
        alert('Service workers are not supported by your browser.');
        return;
      }
  
      navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          registration.showNotification('通知のタイトル', {
            body: 'これはテスト通知です。',
            icon: 'imgs/icon.png', 
            badge: 'imgs/badge.png'
          });
        })
        .catch(function(error) {
          console.error('Error registering service worker:', error);
        });
    });
  });
  