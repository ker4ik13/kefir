// Menu

const menu = document.querySelector('.nav__menu');
const body = document.body;

menu.addEventListener('click', () => {
    menu.classList.toggle('menu__active');
    body.classList.toggle('no-scroll');
});