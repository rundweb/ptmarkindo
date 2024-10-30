const openMenu = document.querySelector(".nav-toggle");
const toggleIcon = document.querySelector(".bx-menu-alt-right");
const listMenu = document.querySelector(".nav-list");
const listSocial = document.querySelector(".nav-social");

openMenu.addEventListener('click',function () {
    listMenu.classList.toggle('menu-active');
    listSocial.classList.toggle('menu-active');
    toggleIcon.classList.toggle('bx-x')
})
