

const btnCreate = document.querySelector("button[data-create]")
const btnDestroy = document.querySelector("button[data-destroy]")
const boxesArr = document.querySelector('#boxes')
const input = document.querySelector('input')

let boxSize = 30

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBox(amount) {
  amount = input.value;

  for (let i = 0, i = amount, i++){
  const box = boxesArr.createElement('div');
  box.style.width = boxSize + 'px'
    box.style.height = boxSize + 'px'
  
  }
  boxSize = 
  
}