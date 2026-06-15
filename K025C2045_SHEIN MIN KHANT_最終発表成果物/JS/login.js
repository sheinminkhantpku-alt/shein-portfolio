document.getElementById("loginBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");


  const VALID_USER = "user@example.com";
  const VALID_PASS = "123456";

  if (!username || !password) {
    error.textContent = "メールアドレスとパスワードを入力してください。";
    return;
  }

  if (username === VALID_USER && password === VALID_PASS) {

    window.location.href = "Anime.html";
  } else {
    error.textContent = "メールアドレスまたはパスワードが正しくありません。";
  }
});



