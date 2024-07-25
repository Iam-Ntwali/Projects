const menuBar = document.getElementById('menubar');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBar) {
  menuBar.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  })
}