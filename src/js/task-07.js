const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const textInputChangeEl = () => textEl.style.fontSize = `${inputEl.value}px`;

inputEl.addEventListener("input", textInputChangeEl);