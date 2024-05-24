self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
  });
  
  self.addEventListener('push', function(event) {
    event.waitUntil(
      self.registration.showNotification('通知のタイトル', {
        body: 'これはあなたのウェブサイトからのテスト通知です。',
        icon: '/path/to/icon.png', // オプション: 通知に表示するアイコン
        badge: '/path/to/badge.png' // オプション: バッジとして表示する画像
      })
    );
  });
  