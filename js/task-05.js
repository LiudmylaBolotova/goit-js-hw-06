const nameInputEl = document.querySelector("#name-input");
const spanInputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", textInput);

function textInput(event) {
  if (nameInputEl.value === "") {
    spanInputEl.textContent = "Anonymous";
  } else {
    spanInputEl.textContent = event.target.value;
  }
}
