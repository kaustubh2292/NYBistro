
//This function helps to post on facebook
exports.postToFacebook = function() {
	// facebook module	
	var fb = require('facebook');

	// authorizes facebook
	fb.appid = '479093032181371';
	fb.permissions = ['publish_stream', 'offline_access'];
	fb.authorize();

	// calling to connect FB
	connect();

	function connect() {

		fb.addEventListener('login', function(e) {

			if (e.success) {
				alert('You are now logged in!');
				// example data that will post on FB
				var data = {
					link : "http://www.appcelerator.com",
					name : "Bon App",
					message : "Check out this app for ordering delicious food",
					caption : "Bon Restorent",
					picture : "http://developer.appcelerator.com/assets/img/DEV_titmobile_image.png",
					description : "Bon app shows you restorent menu and table reservations. "
				};
				fb.dialog("feed", data, function(e) {
					if (e.success && e.result) {
						Ti.API.info("Success! New Post ID: " + e.result);
					} else {
						if (e.error) {
							alert(e.error);
						} else {
							alert("User canceled dialog.");
						}
					}
				});

			} else if (e.error) {
				alert('Error: ' + e.error);
			} else if (e.cancelled) {
				alert('You cancelled the login');
			}
		});

	}

};

