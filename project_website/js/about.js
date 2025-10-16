const title = document.getElementById('title');

title.textContent = localStorage.getItem('taal') === 'nl' ? 'Over ons' : 'About us';