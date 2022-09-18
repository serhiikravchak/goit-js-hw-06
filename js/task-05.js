const textInput = document.querySelector('#name-input')
const textOutput = document.querySelector('#name-output')

textInput.addEventListener('input', onInputChange)


function onInputChange(evt) {
    console.log(evt.currentTarget.value)
    textOutput.textContent = evt.currentTarget.value.trim()
    if (evt.currentTarget.value.trim() === "") {
        textOutput.textContent = 'Anonymous'
    }
}