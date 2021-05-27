function blink(){
    if(document.body.classList.contains('blink')){
        document.body.classList.remove('blink')
    }else{
        document.body.classList.add('blink')

    }
}