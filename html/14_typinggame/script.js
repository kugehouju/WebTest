document.addEventListener('DOMContentLoaded', () => {
    const words = ["りんご", "みかん", "バナナ", "ぶどう", "なにしてんの？"];
    let currentWord;
    let score = 0;
    let time = 60;
    const wordElement = document.getElementById('word');
    const inputField = document.getElementById('inputField');
    const scoreElement = document.getElementById('score');
    const timeElement = document.getElementById('time');

    function startGame() {
        showNewWord();
        inputField.addEventListener('input', checkInput);
        const timer = setInterval(() => {
            time--;
            timeElement.textContent = `時間: ${time}秒`;
            if (time === 0) {
                clearInterval(timer);
                inputField.removeEventListener('input', checkInput);
                inputField.disabled = true;
                alert(`ゲーム終了！最終スコアは ${score} 点です`);
            }
        }, 1000);
    }

    function showNewWord() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        wordElement.textContent = currentWord;
        inputField.value = '';
        inputField.focus();
    }

    function checkInput() {
        if (inputField.value === currentWord) {
            score++;
            scoreElement.textContent = `スコア: ${score}`;
            showNewWord();
        }
    }

    startGame();
});
