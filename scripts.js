
const burguer = document.querySelector('#burguer');
const nav = document.querySelector('.navbar');

burguer.addEventListener('click', navSlide);

function navSlide(event) {
    nav.classList.toggle('nav-active');
    burguer.classList.toggle('fa-xmark');
    burguer.classList.toggle('fa-bars')
}




