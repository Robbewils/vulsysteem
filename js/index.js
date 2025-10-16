const title = document.getElementById('title');

title.textContent = localStorage.getItem('taal') === 'nl' ? 'Project Vulsysteem' : 'Project Fill System';