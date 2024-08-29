// 初期ポイントを設定
let points = 0;

// ポイントの表示要素を取得
const pointsDisplay = document.querySelector('.points h2');

// ボタン要素を取得
const checkButton = document.querySelector('.check-button');

// ボタンクリックイベントを追加
checkButton.addEventListener('click', () => {
    // ポイントを10増加
    points += 10;
    pointsDisplay.textContent = `${points} ＄UT`;
    if (points % 100 === 0) {
        level += 1;
        levelDisplay.textContent = `レベル ${level}`;
    }
});