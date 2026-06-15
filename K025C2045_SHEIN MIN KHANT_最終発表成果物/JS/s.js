const texts = [
  "Enter the Anime Multiverse.",
  "Where legendary anime come alive.",
  "Watch Naruto, One Piece, Bleach & more.",
  "Your gateway to anime worlds."
];

let index = 0;
const textElement = document.getElementById("changingText");

setInterval(() => {
  textElement.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % texts.length;
    textElement.textContent = texts[index];
    textElement.style.opacity = 1;
  }, 1000);

}, 3000);
