console.log('================================');
console.log('AAU MoodleFix was here!');
console.log('================================');

var userStr = document.querySelector('.moodleuser > .main').innerHTML.trim();

console.log('Logged in as: ' + userStr);

if (userStr === 'Guest user') {
	window.location.href = 'https://login.aau.dk/cas/login?service=http%3A%2F%2Fwww.moodle.aau.dk%2Flogin%2Findex.php';
}

if (window.location.hash) {
	console.log('All good!');
} else {
	var linkToCourses = document.querySelector('[href="#semester_category_14A"]');
	linkToCourses.click();
}

console.log('================================');