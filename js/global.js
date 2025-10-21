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
const subnav_home_item1 = document.getElementById('subnav_home_item1');
const subnav_home_item2 = document.getElementById('subnav_home_item2');
const subnav_home_item3 = document.getElementById('subnav_home_item3');
const subnav_home_item4 = document.getElementById('subnav_home_item4');
const subnav_about_item1 = document.getElementById('subnav_about_item1');
const subnav_about_item2 = document.getElementById('subnav_about_item2');
const subnav_about_item3 = document.getElementById('subnav_about_item3');
const subnav_contact_item1 = document.getElementById('subnav_contact_item1');
const subnav_contact_item2 = document.getElementById('subnav_contact_item2');
const subnav_contact_item3 = document.getElementById('subnav_contact_item3');
const subnav_help_item1 = document.getElementById('subnav_help_item1');
const subnav_help_item2 = document.getElementById('subnav_help_item2');
const subnav_help_item3 = document.getElementById('subnav_help_item3');

let taal = localStorage.getItem('taal');
langSelect.value = taal;

navHome.textContent = localStorage.getItem('taal') === 'nl' ? 'Ga naar' : 'Go to';
navAbout.textContent = localStorage.getItem('taal') === 'nl' ? 'Over ons' : 'About us';
navContact.textContent = localStorage.getItem('taal') === 'nl' ? 'Contact' : 'Contact';
navHelp.textContent = localStorage.getItem('taal') === 'nl' ? 'Help' : 'Help';
subnav_home_item1.textContent = localStorage.getItem('taal') === 'nl' ? 'Thuis' : 'Home';
subnav_home_item2.textContent = localStorage.getItem('taal') === 'nl' ? 'Over ons' : 'About us';
subnav_home_item3.textContent = 'contact';
subnav_home_item4.textContent = 'Help';
subnav_about_item1.textContent = localStorage.getItem('taal') === 'nl' ? 'Onze geschiedenis' : 'Our history';
subnav_about_item2.textContent = localStorage.getItem('taal') === 'nl' ? 'Onze doelstelling' : 'Our mission';
subnav_about_item3.textContent = localStorage.getItem('taal') === 'nl' ? 'Onze doel' : 'Our goal';
subnav_contact_item1.textContent = localStorage.getItem('taal') === 'nl' ? 'Kantoor' : 'Office';
subnav_contact_item2.textContent = localStorage.getItem('taal') === 'nl' ? 'E-mail' : 'E-mail';
subnav_contact_item3.textContent = localStorage.getItem('taal') === 'nl' ? 'Telefoon' : 'Phone';
subnav_help_item1.textContent = localStorage.getItem('taal') === 'nl' ? 'Veelgestelde vragen' : 'Frequently asked questions';
subnav_help_item2.textContent = localStorage.getItem('taal') === 'nl' ? 'Hulp bij het invullen' : 'Help with logging in';
subnav_help_item3.textContent = localStorage.getItem('taal') === 'nl' ? 'Veelgestelde vragen' : 'Frequently asked questions';



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
  localStorage.setItem('taal', langSelect.value);
  location.reload();
  console.log(langSelect.value);
  console.log(localStorage.getItem('taal'));
})
