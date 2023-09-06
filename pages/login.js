const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 4) {
    button.removeAttribute('disabled');
    return;
    } 
        
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    localStorage.setItem('Usuario', input.value);
    window.location = 'home.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);