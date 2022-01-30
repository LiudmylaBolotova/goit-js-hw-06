let counterValue = 0;

const oneTargetBtnEl = document.querySelector('[data-action="decrement"]');
const twoTargetBtnEl = document.querySelector('[data-action="increment"]');
const targetValueEl = document.querySelector("#value");

oneTargetBtnEl.addEventListener("click", totalCounterMinusValue);
twoTargetBtnEl.addEventListener("click", totalCounterPlusValue);

function totalCounterPlusValue() {
  counterValue += 1;
  targetValueEl.textContent = counterValue;
}

function totalCounterMinusValue() {
  counterValue -= 1;
  targetValueEl.textContent = counterValue;
}

console.log(targetValueEl);
