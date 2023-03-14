const openMenuButton = document.getElementById("openMenu");
const closeMenuButton = document.getElementById("closeMenu");
const menuHeader = document.getElementsByClassName("header__content-menu")[0];

openMenuButton.addEventListener("click",toggleMenu)

closeMenuButton.addEventListener("click",toggleMenu);

function toggleMenu(){
    openMenuButton.classList.toggle("active");
    closeMenuButton.classList.toggle("active");
    menuHeader.classList.toggle("active");
}