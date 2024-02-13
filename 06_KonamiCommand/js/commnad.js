const konamiCode = ['t', 'a', 'k', 'u', 't', 'o'];
const newCommand = ['b','a','k','a'];
const text = document.querySelector(".text")
const body = document.querySelector("body")
let konamiCodePosition = 0;
let newCommandPosition = 0; // 新たなコマンドの位置
let konamiCodeActivated = false; // konamiCodeが発生したかどうかを追跡するフラグ

function checkKonamiCode(event) {
  if (event.key === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;
    if (konamiCodePosition === konamiCode.length) {
      console.log("イースターエッグ1が発生しました!")
      text.classList.toggle("rainbow")
      konamiCodePosition = 0; // リセット
      konamiCodeActivated = true; // konamiCodeが発生した
    }
  } else if (konamiCodeActivated && event.key === newCommand[newCommandPosition]) { // konamiCodeが発生した後にのみ新たなコマンドをチェック
    newCommandPosition++;
    if (newCommandPosition === newCommand.length) {
      console.log("イースターエッグ2が発生しました!")
      text.textContent = "たくとのばか"; // 新たなコマンドの処理
      newCommandPosition = 0; // リセット
    }
  } else {
    konamiCodePosition = 0; // ミスした場合はリセット
    newCommandPosition = 0; // ミスした場合はリセット
  }
}

document.addEventListener('keydown', checkKonamiCode);

