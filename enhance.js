console.log('================================');
console.log('AAU MoodleFix was here!');
console.log('================================');

var userStr = document.querySelector('.moodleuser > .main').innerHTML.trim();

console.log('Logged in as: ' + userStr);

if (userStr === 'Guest user') {
	window.location.href = 'https://login.aau.dk/cas/login';
}

console.log('================================');