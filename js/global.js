const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');
const langSelect = document.getElementById('taalSelect');
const navHome = document.getElementById('nav_home');
const navAbout = document.getElementById('nav_about');
const navContact = document.getElementById('nav_contact');
const navHelp = document.getElementById('nav_help');
const homeSubnav = document.getElementById('subnav_home');
const aboutSubnav = document.getElementById('subnav_about');
const contactSubnav = document.getElementById('subnav_contact');
const helpSubnav = document.getElementById('subnav_help');


navHome.addEventListener('click', () => {
  homeSubnav.classList.toggle('show');
})

navAbout.addEventListener('click', () => {
  aboutSubnav.classList.toggle('show');
})

navContact.addEventListener('click', () => {
  contactSubnav.classList.toggle('show');
})

navHelp.addEventListener('click', () => {
  helpSubnav.classList.toggle('show');
})

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('active'); main.classList.toggle('shifted');
});

langSelect.addEventListener('change', () => {
  localStorage('taal', langSelect.value);
  location.reload();
})