document.addEventListener("DOMContentLoaded", () => {
  const formElements = {
    name: document.querySelector('input[type="text"]'),
    email: document.querySelector('input[type="email"]'),
    comment: document.getElementById("comment"),
    counter: document.getElementById("counter"),
    submitBtn: document.querySelector("button")
  };

  formElements.comment.addEventListener("input", () => {
    formElements.counter.textContent =
      `現在: ${formElements.comment.value.length}文字`;
  });

  formElements.submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = formElements.name.value.trim();
    const email = formElements.email.value.trim();
    const comment = formElements.comment.value.trim();


    if (!name) {
      alert("名前を入力してください");
      return;
    }

    if (!email) {
      alert("メールアドレスを入力してください");
      return;
    }
    if (!comment) {
      alert("コメントを入力してください");
      return;
    }

    alert("送信しました。ありがとうございます！");


    formElements.name.value = "";
    formElements.email.value = "";
    formElements.comment.value = "";
    formElements.counter.textContent = "現在: 0文字";
  });
});

function isValidEmail(email) {
  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return pattern.test(email);
}