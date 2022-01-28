const inputEl = document.querySelector('#validation-input');
let inputLength = inputEl.dataset.length;

inputEl.addEventListener('blur', event => {
  const text = event.target.value;

  if (text.length ===+ inputLength) {
    inputEl.classList.add('valid');
      inputEl.classList.remove('invalid');
      
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});

