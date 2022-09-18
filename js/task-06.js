const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlur)
const minEl = inputEl.dataset.length
function onBlur(evt) {
        if (evt.currentTarget.value.length < minEl) {
            inputEl.classList.add('invalid')
            inputEl.classList.remove('valid')
        } else {
            inputEl.classList.remove('invalid')
            inputEl.classList.add('valid')
        }
    }
    
