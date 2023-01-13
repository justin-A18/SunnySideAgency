document.getElementById("burger").addEventListener("click", abrirMenu);

let menu = document.getElementById("nav-menu");

let body = document.querySelector("body");

function abrirMenu(){

    menu.classList.toggle("nav-links-2");

    body.classList.toggle("sin-scroll");
    

};