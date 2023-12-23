console.log(document);

const Menu_Bar = document.querySelector('#open-nav-menu');
const NavigationMenu = document.querySelector('header nav .wrapper');

Menu_Bar.addEventListener('click', function () {
  NavigationMenu.classList.add('nav-open');
});