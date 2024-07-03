// === get Current Year === //
const getCurrentYear = new Date().getFullYear();
const year = document.getElementById('year');

console.log(getCurrentYear);
year.textContent = getCurrentYear