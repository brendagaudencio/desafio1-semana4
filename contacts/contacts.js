const formNewsletter = document.getElementById("email-newsletter-contacts");
const emailContacts = document.getElementById("email-contacts");
const messageElement = document.getElementById("message");

function checkInputEmail() {
  const emailValue = emailContacts.value.trim();

  if (emailValue === "") {
    document.getElementById("message-error").innerHTML =
      "Email can not be blank.";
    document.getElementById("message-sucess").innerHTML = "";
  } else if (!isValidEmail(emailValue)) {
    document.getElementById("message-error").innerHTML =
      "This email is not valid.";
    document.getElementById("message-sucess").innerHTML = "";
  } else {
    document.getElementById("message-sucess").innerHTML =
      "Email submitted successfully!";
    document.getElementById("message-error").innerHTML = "";
  }
}

const isValidEmail = (email) => {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email).toLowerCase());
};

formNewsletter.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputEmail();

  let emailKeyContacts = localStorage.setItem(
    "emailKeyContacts",
    emailContacts.value
  );
  emailContacts.value = "";
});

const formGeral = document.getElementById("form-geral");
const firstNome = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailForm = document.getElementById("email-form");
const messageForm = document.getElementById("message-form");

function checkFormInput(messagesArrays) {
  const firstNomeValue = firstNome.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailFormValue = emailForm.value.trim();
  const messageFormValue = messageForm.value;

  if (firstNomeValue === "")
    messagesArrays.push({ campo: firstNome.id, message: "Cannot be empty" });
  if (lastNameValue === "")
    messagesArrays.push({ campo: lastName.id, message: "Cannot be empty" });
  if (emailFormValue === "")
    messagesArrays.push({ campo: emailForm.id, message: "Cannot be empty" });
  if (messageFormValue === "")
    messagesArrays.push({ campo: messageForm.id, message: "Cannot be empty" });

  if (/\d/.test(firstNomeValue))
    messagesArrays.push({
      campo: firstNome.id,
      message: "Cannot have numbers",
    });
  if (/\d/.test(lastNameValue))
    messagesArrays.push({ campo: lastName.id, message: "Cannot have numbers" });

  if (!(firstNomeValue.length < 20 && firstNomeValue.length > 2))
    messagesArrays.push({
      campo: firstNome.id,
      message: "Name must have 2 to 20 letters",
    });
  if (!(lastNameValue.length < 20 && lastNameValue.length > 2))
    messagesArrays.push({
      campo: lastName.id,
      message: "Last name must have 2 to 20 letters",
    });

  if (!isValidEmail(emailFormValue))
    messagesArrays.push({
      campo: emailForm.id,
      message: "This email it is not valid",
    });

  if (!(messageFormValue.length < 255 && messageFormValue.length > 2))
    messagesArrays.push({
      campo: messageForm.id,
      message: "Message must have 2 to 100 letters",
    });

  // if(firstNomeValue === '' || lastNameValue === '' || emailFormValue === '' || messageFormValue === '') {
  //     document.getElementById('form-message-error').innerHTML = 'Please fill in the blanks spaces.'
  //     document.getElementById('form-message-sucess').innerHTML = ''
  // }
  // else if(!isValidEmail(emailFormValue)) {
  //     document.getElementById('form-message-error').innerHTML = 'This email is not valid.'
  //     document.getElementById('form-message-sucess').innerHTML = ''
  // } else {
  //     document.getElementById('form-message-sucess').innerHTML = 'The contact form was submitted successfully!'
  //     document.getElementById('form-message-error').innerHTML = ''
  // }
}

function setMessages(messagesArrays) {
  console.log(messagesArrays);
  messagesArrays.forEach((element) => {
    const existingElement = document.getElementById(element.campo);
    const newElement = document.createElement("div");
    newElement.textContent = element.message;
    newElement.classList.add("errorForm");
    existingElement.insertAdjacentElement("afterend", newElement);
  });
}

formGeral.addEventListener("submit", (e) => {
  e.preventDefault();

  const messagesArrays = [];
  const elementsErrors = document.querySelectorAll(".errorForm");
  elementsErrors.forEach((element) => {
    element.remove();
  });

  checkFormInput(messagesArrays);
  if (messagesArrays.length > 0) {
    setMessages(messagesArrays);
  } else {
    const formData = new FormData(formGeral);
    const objForm = Object.fromEntries(formData);

    const formInJson = JSON.stringify(objForm);
    localStorage.setItem("formGeral", formInJson);
  }

  // firstNome.value = ''
  // lastName.value = ''
  // emailForm.value = ''
  // messageForm.value = ''
});
