const title = document.getElementById('title');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const subtitle1 = document.getElementById('subtitle1');
const subtitle2 = document.getElementById('subtitle2');
const subtitle3 = document.getElementById('subtitle3');
const subtitle4 = document.getElementById('subtitle4');
const subtitle5 = document.getElementById('subtitle5');

title.textContent = localStorage.getItem('taal') === 'nl' ? 'Project Vulsysteem' : 'Project Fill System';

text1.innerHTML = localStorage.getItem('taal') === 'nl'
? 'Voor ons project moesten we een systeem bedenken om een glas te vullen. We hebben besloten om een loopband te maken. Het systeem wordt gestard door een druk op de knop in de app via <a href="#sec5">RemoteXY</a>. Het glas wordt op het begin van de band geplaatst, de hoogte wordt bepaald door <a href="#sec2">dit systeem</a>. Nadat de hoogte geweten is wordt het glas gevuld tot een correcte hoogte. Het waterlevel wordt bepaald door een ultrasoonsensor. Nadat het glas volledig of half gevuld is (kan je de hoevelheid kiezen in de app) wordt het glas naar het einde van de band gebracht.'
: 'For our project, we have to design a system to fill a glass. We have decided to make a conveyor belt. The system is controlled by a button in the app via <a href="#sec5">RemoteXY</a>. The glass is placed at the beginning of the belt, the height is determined by <a href="#sec2">this system</a>. After the height is measured, the glass is filled to the correct height. The water level is determined by an ultrasonic sensor. After the glass is full or half filled (you can select the amount in the app) the glass is brought to the end of the band.';


text2.innerHTML = localStorage.getItem('taal') === 'nl'
? 'We hebben een systeem ontworpen om zowel de hoogte van het glas te meten als de horizontale afstand op de band. Een laser afstandsensor zit op een tandlat, deze wordt omhoog en omlaag bewogen door een servo. De hoogte wordt bepaald door de sensor omhoog te bewegen tot deze een te grote afstand meet (dus wanneer de laser boven het glas komt).'
: 'We have designed a system to measure both the height of the glass and the horizontal distance on the blet. A laser distance sensor is placed on a seesaw, which is moved up and down by a servo. The height is measured by moving the sensor up until the laser goes over the glass.';

text3.innerHTML = localStorage.getItem('taal') === 'nl'
? 'De band wordt aangestuurd door ene NEMA 17 stappenmotor. We hadden eerst een andere motor gebruikt, maar deze leek te zwak om de band te kunnen bewegen. De prijs van deze motor en vooral de driver is redelijk hoog, dus er moet eventueel een alternatief gevonden worden.'
: 'The belt is controlled by a NEMA 17 stepper motor. We initially used a different motor, but it was too weak to move the belt. The price of this motor and especially the driver is quite high, so we might need to find an alternative.';

text4.innerHTML = localStorage.getItem('taal') === 'nl'
? 'Het glas wordt gevuld door een waterpomp. De pomp die we gebruikt hebben is relatief traag, dus deze kan eventueel nog vervangen worden.' : 'The glass is filled by a water pump. The pump we use is relatively slow, so it might be possible to replace it.';

text5.innerHTML = localStorage.getItem('taal') === 'nl'
? 'Het systeem wordt aangestuurd door een app via RemoteXY. Op de app kan je kiezen hoe hoog het glas gevuld wordt en op de start en stop knop drukken. Je kan ook zien hoe hoog het waterlevel al is en hoe ver het glas op de band staat.'
: 'The system is controlled by an app via RemoteXY. On the app, you can choose how high the glass should be filled and press the start and stop buttons. You can also see how high the water level is and how far the glass is on the belt.';

subtitle1.textContent = localStorage.getItem('taal') === 'nl' ? 'Ons project' : 'Our project';

subtitle2.textContent = localStorage.getItem('taal') === 'nl' ? 'Meetsyteem' : 'Measurement system';

subtitle3.textContent = localStorage.getItem('taal') === 'nl' ? 'De motor' : 'The motor';

subtitle4.textContent = localStorage.getItem('taal') === 'nl' ? 'De pomp' : 'The pump';

subtitle5.textContent = localStorage.getItem('taal') === 'nl' ? 'De app' : 'The app';