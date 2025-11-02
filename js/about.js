const title = document.getElementById('title');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const subtitle1 = document.getElementById('subtitle1');
const subtitle2 = document.getElementById('subtitle2');
const subtitle3 = document.getElementById('subtitle3');
const subtitle4 = document.getElementById('subtitle4');

title.textContent = localStorage.getItem('taal') === 'nl' ? 'Project Vulsysteem' : 'Project Fill System';

text1.innerHTML = localStorage.getItem('taal') === 'nl'
? 'Wij zijn 2 leerlingen die graag praktisch werken en houden van technologie. Voor dit project hebben we onze kennis van elektronica, programmeren en mechanica gecombineerd om een volledig automatisch vulsysteem te bouwen.'
: 'We are a group of students who enjoy hands-on work and love technology. For this project, we combined our knowledge of electronics, programming, and mechanics to build a fully automatic glass filling system.';


text2.innerHTML = localStorage.getItem('taal') === 'nl'
? 'Iedereen in het team had zijn eigen verantwoordelijkheden, van het ontwerpen van de onderdelen in SolidWorks, tot het programmeren van de sensoren en het aansturen van de motoren via Arduino. We hebben veel samengewerkt, getest, fouten opgelost en het systeem stap voor stap verbeterd.'
: 'Each team member had their own responsibilities — from designing the parts in SolidWorks to programming the sensors and controlling the motors through Arduino. We worked closely together, tested a lot, fixed problems, and improved the system step by step.';

text3.innerHTML = localStorage.getItem('taal') === 'nl'
? 'Dit project was voor ons een kans om te leren hoe je een idee omzet in een echt werkend systeem. We hebben niet alleen technische vaardigheden opgedaan, maar ook geleerd hoe belangrijk communicatie en teamwork zijn.'
: 'This project was a great opportunity to learn how to turn an idea into a working system. We gained not only technical experience, but also learned how important communication and teamwork are.';

text4.innerHTML = localStorage.getItem('taal') === 'nl'
? 'Ons doel was om iets te maken dat niet alleen werkt, maar er ook netjes uitziet en logisch in elkaar zit, en daar zijn we trots op.'
: 'Our goal was to create something that not only works, but also looks clean and makes sense — and we’re proud of that.';

subtitle1.textContent = localStorage.getItem('taal') === 'nl' ? 'Wie zijn wij' : 'Who are we';

subtitle2.textContent = localStorage.getItem('taal') === 'nl' ? 'Wat hebben we gedaan' : 'What we did';

subtitle3.textContent = localStorage.getItem('taal') === 'nl' ? 'Wat hebben we geleerd' : 'What we learned';

subtitle4.textContent = localStorage.getItem('taal') === 'nl' ? 'Het resultaat' : 'The result';
