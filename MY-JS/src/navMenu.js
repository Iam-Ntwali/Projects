// HTML Element Selectors
const OpenMenu_BarBtn = document.querySelector('#open-nav-menu');
const closeMenu_BarBtn = document.querySelector('#close-nav-menu');
const NavigationMenu = document.querySelector('header nav .wrapper');


// Event Handlers
OpenMenu_BarBtn.addEventListener('click', function () {
  NavigationMenu.classList.add('nav-open');
});

closeMenu_BarBtn.addEventListener('click', function () {
  NavigationMenu.classList.remove('nav-open');
});