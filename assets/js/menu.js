// Menu

const menu = document.querySelector('.nav__menu');
const body = document.body;
const openCloseButtons = document.querySelectorAll('.openCloseMenuButton');

openCloseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        menu.classList.toggle('menu__active');
        body.classList.toggle('no-scroll');

    });
});





