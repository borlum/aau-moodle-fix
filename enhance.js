console.log('==========================================');
console.log('--> AAU MoodleFix, BEGIN!');
console.log('==========================================');

var loginInfoElement;
if (loginInfoElement = document.querySelector('.moodleuser > .main')) {
	var userStr = loginInfoElement.innerHTML.trim();
	console.log('Logged in as: ' + userStr);
} else {
	console.log('Not logged in / at subsite without login info');
}

if (userStr === 'Guest user') {
	window.location.href = 'https://login.aau.dk/cas/login?service=http%3A%2F%2Fwww.moodle.aau.dk%2Flogin%2Findex.php';
} else {
	var userCtrl = document.querySelector('.span4.topnav.right > ul');
	
	var userName = document.createElement('li');
	userName.innerHTML = userStr;
	userCtrl.insertBefore(userName, userCtrl.childNodes[0]);

	var divider = document.createElement('li');
	divider.innerHTML = '||';
	userCtrl.insertBefore(divider, userCtrl.childNodes[1]);

	var logout = document.createElement('li');
	logout.innerHTML = '<a href="https://login.aau.dk/cas/logout?service=http%3A%2F%2Fwww.moodle.aau.dk%2Flogin%2Findex.php">Logout</a>';
	userCtrl.insertBefore(logout, userCtrl.childNodes[2]);

	console.log(userCtrl);
}

if (window.location.hash) {
	console.log('All good!');
} else {
	var linkToCourses;
	if (linkToCourses = document.querySelector('[href="#semester_category_14A"]')) {
		linkToCourses.click();
	}
}

console.log('==========================================');