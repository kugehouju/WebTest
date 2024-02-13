// 画像を格納する配列
var images = [];

// 画像の数を指定
var numImages = 20;

// Unsplashからランダムな画像を取得
for (var i = 0; i < numImages; i++) {
    var img = new Image();
    img.src = "https://source.unsplash.com/random/?camping&" + i;
    img.loading = 'lazy';
    var div = document.createElement('div');
    div.className = 'grid-item';
    div.appendChild(img);
    images.push(div);
}

// 画像をページに追加
var container = document.createElement('div');
container.className = 'grid-container';
images.forEach(function(div) {
    container.appendChild(div);
});
document.body.appendChild(container);

// スクロールがページの一番下まで到達したときに新しい画像を生成
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        var newContainer = document.createElement('div');
        newContainer.className = 'grid-container';
        for (var i = 0; i < numImages; i++) {
            var img = new Image();
            img.src = "https://source.unsplash.com/random/?camping&" + (images.length + i);
            img.loading = 'lazy';
            var div = document.createElement('div');
            div.className = 'grid-item';
            div.appendChild(img);
            images.push(div);
            newContainer.appendChild(div);
        }
        document.body.appendChild(newContainer);
    }
};