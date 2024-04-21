const formNewsletter = document.getElementById('email-newsletter')
const email = document.getElementById('email')
const messageElement = document.getElementById('message')

function checkInputEmail() {
    const emailValue = email.value.trim()

    if(emailValue === '') {
        document.getElementById('message-error').innerHTML = 'Email can not be blank.'
        document.getElementById('message-sucess').innerHTML = ''
    } else if (!isValidEmail(emailValue)) {
        document.getElementById('message-error').innerHTML = 'This email is not valid.'
        document.getElementById('message-sucess').innerHTML = ''
    } else {
        document.getElementById('message-sucess').innerHTML = 'Email submitted successfully!'
        document.getElementById('message-error').innerHTML = ''
    }
}

const isValidEmail = email => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regexEmail.test(String(email).toLowerCase())
}

formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault() 

    checkInputEmail()

    email.value = ''
});



const formGeral = document.getElementById('form-geral')
const firstNome = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const emailForm = document.getElementById('email-form')
const messageForm = document.getElementById('message-form')

formGeral.addEventListener('submit', (e) => {
    e.preventDefault()

    checkFormInput()
    const formData = new FormData(formGeral)
    const objForm = Object.fromEntries(formData)

    const formInJson = JSON.stringify(objForm)
    localStorage.setItem('formGeral', formInJson)

    firstNome.value = ''
    lastName.value = ''
    emailForm.value = ''
    messageForm.value = ''
})

function checkFormInput() {
    const firstNomeValue = firstNome.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailFormValue = emailForm.value.trim()
    const messageFormValue = messageForm.value

    if(firstNomeValue === '' || lastNameValue === '' || emailFormValue === '' || messageFormValue === '') {
        document.getElementById('form-message-error').innerHTML = 'Please fill in the blanks spaces.'
        document.getElementById('form-message-sucess').innerHTML = ''
    } 
    else if(!isValidEmail(emailFormValue)) {
        document.getElementById('form-message-error').innerHTML = 'This email is not valid.'
        document.getElementById('form-message-sucess').innerHTML = ''
    } else {
        document.getElementById('form-message-sucess').innerHTML = 'The contact form was submitted successfully!'
        document.getElementById('form-message-error').innerHTML = ''
    }
}