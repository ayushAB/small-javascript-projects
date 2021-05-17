const toast_msg = document.getElementById('toast_msg');
function toast(){
    toast_msg.classList.add('toast_pop');
    setTimeout(closeToast,3000);
}

function closeToast(){
    toast_msg.classList.remove('toast_pop');
}