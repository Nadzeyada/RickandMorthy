const form = document.querySelector('.form');

// === Validating form & popup
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());

  let valid =true;
  const errors = document.querySelectorAll('.form__error');
  for(let error of errors) {
    error.textContent="";
  }

  if(data.username === "") {
    errors[0].textContent = "Please, enter your first name.";
    valid = false;
  }

  if(data.email === "") {
    errors[1].textContent = "Please, enter a valid email address.";
    valid = false;
  }

  if(!data.consent) {
    errors[2].textContent = "Please, consent to the processing of personal data.";
    valid = false;
  }

  if(valid) {
    document.querySelectorAll('.popup__message')[1].innerHTML=`Form submitted successfully!<br>${data.username}<br>${data.email}`;
    document.querySelector('.form__popup').classList.remove('hidden');
    form.reset();
  }
});

// === Closing form submission confirmation ===
document.querySelector('.form__popup .popup__close-button').addEventListener('click', ()=>{
  document.querySelector('.form__popup').classList.add('hidden');
})
