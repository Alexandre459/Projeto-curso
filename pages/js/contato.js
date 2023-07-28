const input = document.querySelector('.contact-input');
const button = document.querySelector('.button');
const form = document.querySelector('.contact-form');

const validateInput = ({ target }) => {
    if (target.value.length > 4) {
        button.removeAttribute('disabled')
        return;
    } 
    
    button.setAttribute('disabled', '');
}

input.addEventListener('input', validateInput);