const form = document.querySelector('.login-form');
const submitBtn = document.querySelector (' button')
form.addEventListener('submit', onFormSubmit);



function onFormSubmit(evt) {
    evt.preventDefault();
 
    const formElements = evt.currentTarget.elements;
    
    const email = formElements.email
    const password = formElements.password

    if (email.value === ''|| password.value === '') {
        alert('Заповніть всі поля!!')
    } 
    const formData = {
        email: email.value,
        password: password.value
    }
    console.log(formData)
    
    form.reset()
}

