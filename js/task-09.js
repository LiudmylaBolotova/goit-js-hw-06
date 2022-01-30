const colorOnBodyEl = document.querySelector("body");
const colorOnBtnEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  colorOnBodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = colorOnBodyEl.style.backgroundColor;
};

colorOnBtnEl.addEventListener("click", changeColor);
