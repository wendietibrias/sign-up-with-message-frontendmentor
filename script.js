const container = document.querySelector('.container');
const signUpButton = document.querySelector('.sign-up-button');
const signUpInput = document.querySelector('.sign-up-input');
const formLabel = document.querySelector('.form-label');
const errorLabel = document.getElementById('error');

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

signUpButton.addEventListener('click' , function() {

     if(signUpInput.value === '') {
         return alert('please complete field');
     }

     if(!signUpInput.value.match(validRegex)) {
        signUpInput.classList.add('error');
        return errorLabel.innerHTML = "Valid email is required!";
     }

     signUpInput.classList.remove('error');

     container.innerHTML = `
        <main class="container-success-content">
          <div class="main-info">
           <img src="./assets/images/icon-success.svg" alt="success">
          <h1>Thanks for subscribing!</h1>
          <p>
             A confirmation email has been sent to <span>ash@loremcompany.com</span>. 
             Please open it and click the button inside to confirm your subscription.
          </p>
          </div>
          <button>Dismis message</button>
        </main>
     `;
});