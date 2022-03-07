const menu_button = document.querySelector(".burg");
const close_button = document.querySelector(".btn-close");
const menu = document.querySelector("#header_section header nav");

menu_button.addEventListener('click', function(){
    menu.classList.add('open');
});
close_button.addEventListener('click', function(){
    menu.classList.remove('open');
});