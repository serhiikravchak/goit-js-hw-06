function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeButton = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

changeButton.addEventListener('click', onChangeColor);

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}

