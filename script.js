// 設定ボタン
const settingsBtn = document.getElementById("settingsBtn");
// 設定ウィンドウ
const settingsWindow = document.getElementById("settingsWindow");
// テーマ切り替えボタン
const toggleBtn = document.getElementById("toggle");

// 設定ウィンドウの開閉
settingsBtn.onclick = () => {
  settingsWindow.classList.toggle("hidden");
};

// テーマ切り替え
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
};