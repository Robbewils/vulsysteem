const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const main = document.querySelector('main');
const langSelect = document.getElementById('taalSelect');

const navHome = document.getElementById('nav_home');
const navProject = document.getElementById('nav_project');
const navAbout = document.getElementById('nav_about');
const navHelp = document.getElementById('nav_help');

const homeSubnav = document.getElementById('subnav_home');
const projectSubnav = document.getElementById('subnav_project');
const aboutSubnav = document.getElementById('subnav_about');
const helpSubnav = document.getElementById('subnav_help');

const subnav_home_item1 = document.getElementById('subnav_home_item1');
const subnav_home_item2 = document.getElementById('subnav_home_item2');
const subnav_home_item3 = document.getElementById('subnav_home_item3');

const subnav_project_item1 = document.getElementById('subnav_project_item1');
const subnav_project_item2 = document.getElementById('subnav_project_item2');
const subnav_project_item3 = document.getElementById('subnav_project_item3');
const subnav_project_item4 = document.getElementById('subnav_project_item4');
const subnav_project_item5 = document.getElementById('subnav_project_item5');

const subnav_about_item1 = document.getElementById('subnav_about_item1');
const subnav_about_item2 = document.getElementById('subnav_about_item2');
const subnav_about_item3 = document.getElementById('subnav_about_item3');

const subnav_help_item1 = document.getElementById('subnav_help_item1');

let taal = localStorage.getItem('taal');
langSelect.value = taal;

navHome.textContent = taal === 'nl' ? 'Home' : 'Home';
navProject.textContent = taal === 'nl' ? 'Project' : 'Project';
navAbout.textContent = taal === 'nl' ? 'Over ons' : 'About us';

subnav_home_item1.textContent = taal === 'nl' ? 'Ons project' : 'Our project';
subnav_home_item2.textContent = taal === 'nl' ? 'Over ons' : 'About us';

subnav_project_item1.textContent = taal === 'nl' ? 'Projectbeschrijving' : 'Project description';
subnav_project_item2.textContent = taal === 'nl' ? 'Meetsysteem' : 'Measurement system';
subnav_project_item3.textContent = taal === 'nl' ? 'De motor' : 'The motor';
subnav_project_item4.textContent = taal === 'nl' ? 'De pomp' : 'The pump';
subnav_project_item5.textContent = taal === 'nl' ? 'De app' : 'The app';

subnav_about_item1.textContent = taal === 'nl' ? 'Onze geschiedenis' : 'Our history';
subnav_about_item2.textContent = taal === 'nl' ? 'Onze doelstelling' : 'Our mission';
subnav_about_item3.textContent = taal === 'nl' ? 'Ons doel' : 'Our goal';

subnav_help_item1.textContent = taal === 'nl' ? 'Stuur ons een mail' : 'Send us a mail';

navHome.addEventListener('click', () => {
  homeSubnav.classList.toggle('show');
});

navProject.addEventListener('click', () => {
  projectSubnav.classList.toggle('show');
});

navAbout.addEventListener('click', () => {
  aboutSubnav.classList.toggle('show');
});

navHelp.addEventListener('click', () => {
  helpSubnav.classList.toggle('show');
});

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  main.classList.toggle('shifted');
});

langSelect.addEventListener('change', () => {
  localStorage.setItem('taal', langSelect.value);
  location.reload();
});
