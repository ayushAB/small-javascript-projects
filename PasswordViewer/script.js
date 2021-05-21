const eyeShowIcon = document.getElementById('show-password');
const eyeHideIcon = document.getElementById('hide-password');
const inputPassword = document.getElementById('password');

eyeShowIcon.addEventListener('click',toggelePassword);
eyeHideIcon.addEventListener('click',toggelePassword);

function toggelePassword(){
    if(inputPassword.type === 'password'){
        inputPassword.type = 'text';
        eyeShowIcon.classList.add('hidden');
        eyeHideIcon.classList.remove('hidden');
    }else{
        inputPassword.type = 'password';
        eyeShowIcon.classList.remove('hidden');
        eyeHideIcon.classList.add('hidden');
    }
}