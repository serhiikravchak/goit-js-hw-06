function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector(`button[data-create]`);
const boxes = document.querySelector("#boxes");
const btnDestroy = document.querySelector(`button[data-destroy]`);

input.addEventListener("input", onNumberBox);
btnCreate.addEventListener("click", () => createBoxes(amounts));
btnDestroy.addEventListener("click", destroyBoxes);

let amounts;


function onNumberBox() {
  amounts = Number(input.value);
  return amounts;
}
let size = 30;
const box = [];

function createBoxes(amounts) {
  for (let i = 0; i < amounts; i++) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div class="color" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size = size + 10;
  }
  boxes.append(...box);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}

