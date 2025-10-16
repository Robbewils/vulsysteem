const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('active'); main.classList.toggle('shifted');
});