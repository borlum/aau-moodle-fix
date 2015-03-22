var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement("style");

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();

console.log('==========================================');
console.log('--> AAU MoodleFix, BEGIN!');
console.log('==========================================');

sheet.addRule('.aalborg_logo', 'width: 178px !important;', 0);
sheet.addRule('.nav.aalborg_top', 'text-align: center !important; width: 100% !important;', 0);

sheet.addRule('.nav.aalborg_top li', 'float: none !important; display: inline-block !important;', 0);
sheet.addRule('.bg-img', 'background: #211A52 !important;', 0);

sheet.addRule('#region-main', 'width: 100% !important;', 0);
sheet.addRule('#region-post', 'display: none !important;', 0);

sheet.addRule('.aalborg_sub.subnav', 'display: none !important;', 0);



var loginInfoElement =  document.querySelector('.moodleuser > .main') || document.querySelector('#usermenu .hidemobile');
if (loginInfoElement) {
	var userStr = loginInfoElement.innerHTML.trim();
	console.log('Logged in as: ' + userStr);
} else {
	console.log('Not logged in / at subsite without login info');
	if (document.URL.indexOf('calmoodle') != -1) {
		console.log('@ calmoodle!');
	} else {
		window.location.href = 'https://login.aau.dk/cas/login?service=http%3A%2F%2Fwww.moodle.aau.dk%2Flogin%2Findex.php';
	}
}

if (userStr === 'Guest user' || userStr === 'Gæst') {
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