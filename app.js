const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button');

const handleFocus = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) =>{
    if (target.value === ''){
        const span = target.previousElementSibling;
        span.classList.remove('span-active');    
    };
}

const handleChange = () => {
    const [username, password] = inputs;
    /*Essa constante de cima é a mesma coisa que criar duas constante:
       ex: const username = inputs [0]
           const password = inputs [1]*/ 
    
    if(username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}


inputs.forEach((inputs) => inputs.addEventListener('focus', handleFocus));
inputs.forEach((inputs) => inputs.addEventListener('focusout', handleFocusOut));
inputs.forEach((inputs) => inputs.addEventListener('input', handleChange));
