document.addEventListener('DOMContentLoaded', function() {
    const stalker = document.getElementById('cursor-stalker');
    let mouseX = 0, mouseY = 0, posX = 0, posY = 0;
  
    function mouseMoveHandler(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
  
    function animate() {
      // カーソルの先端にカーソルストーカーを配置するために、
      // translateの値を調整します。
      posX += (mouseX - posX) / 10; // 追従速度を遅くするために割り算の値を調整します。
      posY += (mouseY - posY) / 10; // ここでの割り算の値を調整することで、追従速度を変更できます。
  
      // カーソルストーカーのサイズを考慮せずに位置を設定
      stalker.style.left = posX + 'px';
      stalker.style.top = posY + 'px';
  
      requestAnimationFrame(animate);
    }
  
    document.addEventListener('mousemove', mouseMoveHandler);
    animate(); // アニメーションを開始します。
  });