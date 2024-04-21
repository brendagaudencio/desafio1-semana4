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