const form = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const error_mesg = document.getElementsByClassName('error-txt')[0];
const error_icon = document.getElementsByClassName('error-icon')[0];


form.addEventListener('submit', e => {
   e.preventDefault();

   validateInput();
});

const setError = (element, message) => {
   const inputControl = element.parentElement;
   //const errorDisplay = inputControl.querySelector('.error-txt');

   error_mesg.innerText = message;
   inputControl.classList.add('error');
   inputControl.classList.remove('success');
}

const setSuccess = element => {
   const inputControl = element.parentElement;
   const errorDisplay = inputControl.querySelector('.error-txt');

   errorDisplay.innerText = '';
   inputControl.classList.add('success');
   inputControl.classList.remove('error'); 
};

const isValidEmail = email => {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () => {
   const emailValue = email.value.trim();

   if (emailValue === '') {
      setError(email, 'Email is required');
      error_icon.style.cssText = "opacity: 1;";
   } else if (!isValidEmail(email.value)) {
      setError(email, 'Provide a valid email address');
      error_icon.style.cssText = "opacity: 1;";
   } else {
      setSuccess(email);
      error_icon.style.cssText = "opacity: 0;";
   }
};

