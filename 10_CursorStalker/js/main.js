document.getElementById('startAnimation').addEventListener('click', function() {
  // SVGコンテナを表示
  var container = document.querySelector('.container');
  container.style.display = 'block';
  // アニメーション用のクラスを追加
  container.classList.add('animate-svg');
});