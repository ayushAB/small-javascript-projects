function openCloseNavBar(){
    const navBar = document.getElementById('navBar');
    const btn = document.getElementById('navBtn');
    if(navBar.classList.contains('nav_bar_right')){
        navBar.classList.remove('nav_bar_right');
        btn.classList.remove('ham_btn_right');
    }else{
        navBar.classList.add('nav_bar_right');
        btn.classList.add('ham_btn_right');
    }
}