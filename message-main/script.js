const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 18th!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Oh well, huge respect";
  gif.src =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXg4dnF4MzR2ajg4N25xbGIyeXJkd3Vodmwxdmx3Y3F0cWE4bGE5OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WO5Q7FsxJN2pjYc424/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});