var osname = Ti.Platform.osname;
if (osname == 'iphone' || osname == 'ipad') {
	// Create custom back button
	var backButton = Ti.UI.createButton({
		height : 26,
		width : 65,
		backgroundImage : '/images/backtohomebtn.png'
	});

	var navWnd = Alloy.Globals.navWnd;

	// Set as left nav button for current window
	$.newUserWnd.setLeftNavButton(backButton);
	$.newUserWnd.setBarImage('/images/newuserbarbkg.png');

	// Set event handler to close current window on back button
	backButton.addEventListener('click', function() {
		navWnd.closeWindow($.newUserWnd);
	});

	$.btnChkBox.addEventListener('click', function(e) {
		if (e.source.backgroundImage == '/images/squarechkboxbkg.png') {
			e.source.backgroundImage = '/images/squarecheckedbkg.png';
		} else {
			e.source.backgroundImage = '/images/squarechkboxbkg.png';
		}
	});

}
if (Ti.Platform.osname === "android") {

	// Event listener for adding action bar.
	$.newUserWnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.newUserWnd.getActivity().actionBar;
			//blank title
			actionBar.setTitle('');
			actionBar.setBackgroundImage('/aimages/newuserbarbkg.png');
			actionBar.setIcon('/aimages/arrowbutton.png');

			actionBar.onHomeIconItemSelected = function() {

				$.newUserWnd.close();

			};

		}
	});

	// Check box listener
	$.btnChkBox.addEventListener('click', function(e) {

		if (e.source.backgroundImage == '/aimages/squarechkboxbkg.png') {
			e.source.backgroundImage = '/aimages/squarecheckedbkg.png';
		} else {
			e.source.backgroundImage = '/aimages/squarechkboxbkg.png';
		}

	});

}
$.termsAndConditions.addEventListener('click', function(e) {
	alert('Terms and Conditions clickd');
});

