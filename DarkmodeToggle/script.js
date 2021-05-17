const toggle = document.getElementById('toggel_btn');
const circle = document.getElementById('circle');
toggle.addEventListener('click',function(e){
    if(circle.classList.contains('move_right')){
        circle.classList.remove('move_right');
        document.body.style.backgroundColor = "rgba(109,40,217,1)";
    }else{
        circle.classList.add('move_right');
        document.body.style.backgroundColor = "#2b2e4a";
        document.body.style.color = "white";
    }
});