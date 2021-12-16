const clientName = document.querySelector('#user_name');
const clientEmail = document.querySelector('#user_email');
const clientMessage = document.querySelector('#user_message');

function useLocalStorage() {
  const contactFormData = {
    name: clientName.value,
    email: clientEmail.value,
    message: clientMessage.value,
  };
  localStorage.setItem('contactFormData', Json.stringify(contactFormData))
}

const formInputs = document.querySelectorAll('input , textarea');
for (let j = 0; j < formInputs.length; j += 1) {
  formInputs[j].addEventListener('change', () => {
    useLocalStorage();
  })
}
