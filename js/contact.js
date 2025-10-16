const title = document.getElementById('title');

title.textContent = localStorage.getItem('taal') === 'nl' ? 'Kom in contact' : 'Contact us';