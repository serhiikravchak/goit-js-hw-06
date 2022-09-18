let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const valueEl = document.querySelector('#value');

incrementBtn.addEventListener('click', incrementHandler)

decrementBtn.addEventListener('click', decrementHandler)

valueEl.textContent = counterValue

function incrementHandler() {
    counterValue += 1;
    valueEl.textContent = counterValue
}

function decrementHandler() {
    counterValue -= 1;
    valueEl.textContent = counterValue
}