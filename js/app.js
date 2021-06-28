var slide_arrow = document.getElementById('slide_arrow');
var menu = document.getElementById('menu');

document.addEventListener('click', ()=>{
    menu.classList.toggle('open');
    slide_arrow.classList.toggle('back');
})