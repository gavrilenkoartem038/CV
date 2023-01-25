const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.header-nav');

function toggleNav() {
  nav.classList.toggle('open');
  burger.classList.toggle('open');
  document.body.classList.toggle('lock');
}

function closeNav(e) {
  if (e.target.classList.contains('nav-link')) {
    burger.classList.remove('open');
    nav.classList.remove('open');
    document.body.classList.remove('lock');
}
}

burger.addEventListener('click', toggleNav)
nav.addEventListener('click', closeNav)