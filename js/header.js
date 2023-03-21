document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(){
    document.getElementById("openMenu").addEventListener("click",toggleMenu);
    document.getElementById("closeMenu").addEventListener("click",toggleMenu);
}

function toggleMenu(){
    document.getElementById("openMenu").classList.toggle("active");
    document.getElementById("closeMenu").classList.toggle("active");
    document.getElementsByClassName("header__content-menu")[0].classList.toggle("active");
}