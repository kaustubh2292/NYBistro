// Create custom back button
var osname = Ti.Platform.osname;
if (osname === 'iphone') {
var backButton = Ti.UI.createButton(
	{
		height : 26,
		width : 65,
		backgroundImage: '/images/backbtn.png'
	}
);

// Create custom right "Share" button
var shareBtn = Ti.UI.createButton(
	{
		height : 26.5,
		width : 55.5,
		textAlign: 'TEXT_ALIGNMENT_CENTER',
		font : {
			fontFamily:'Arial',
			fontSize : 11,
			fontWeight: 'bold' 
		},
		color:'#ebbca3',
		backgroundImage : '/images/btnsharebkg.png'	
	}
);

var navWnd = Alloy.Globals.navWnd;

// Set event handler to close current window on back button
backButton.addEventListener('click', function()
{
	navWnd.closeWindow($.tellAFriendWnd);
});

// Set as left nav button for current window
$.tellAFriendWnd.setLeftNavButton(backButton);
$.tellAFriendWnd.setRightNavButton(shareBtn);

$.tellAFriendWnd.setBarImage('/images/tellafriendbarbkg.png');

var tbldata = [];
for(var i=0;i<4;i++) {
	var row = Alloy.createController('tellafriendrow', {
		rownum: i
	}).getView();
	
	tbldata.push(row);
} // end for loop

$.theTable.data = tbldata;

var controls = [];

$.theTable.addEventListener('click',function(e) {
	if(e.source.backgroundImage =='/images/chkboxunchecked.png')
	{
		// First check if there are any other checkboxes if there are uncheck them
		if(controls.length > 0)
		{
			var temp = controls.pop();
			temp.backgroundImage = '/images/chkboxunchecked.png';
		}
		e.source.backgroundImage = '/images/chkboxchecked.png';
		controls.push(e.source);
	}else
	{
		e.source.backgroundImage = '/images/chkboxunchecked.png';
	}
	
}); 

shareBtn.addEventListener('click',function(){
	alert('show clicked');
});

} else if (osname === 'android') {
	
	var tbldata = [];
for(var i=0;i<4;i++) {
	var row = Alloy.createController('tellafriendrow', {
		rownum: i
	}).getView();
	
	tbldata.push(row);
} // end for loop

$.theTable.data = tbldata;

$.theTable.footerView = Ti.UI.createView({
    height: 1,
    backgroundColor: 'transparent'
});

var controls = [];
var shareAction = "NONE";

$.theTable.addEventListener('click',function(e) {
	
	
	if(e.source.backgroundImage =='/aimages/chkboxunchecked.png')
	{
		// First check if there are any other checkboxes if there are uncheck them
		if(controls.length > 0)
		{
			Ti.API.info('uncheck');
			var temp = controls.pop();
			temp.backgroundImage = '/aimages/chkboxunchecked.png';
		}
		Ti.API.info('check');
		e.source.backgroundImage = '/aimages/chkboxchecked.png';
		controls.push(e.source);
		
		// row index 0 = Email, 1 = Text, 2 = Facebook and 3 = Twitter
		if(e.index === 0) {
			 // alert("Share by Email clicked");
			shareAction = "EMAIL";
		}else if(e.index === 1) {
			// alert("Share by Text clicked");
			shareAction = "TEXT";
		}else if(e.index === 2) {
			// alert("Share by facebook clicked");
			shareAction = "FACEBOOK";
		}else if(e.index === 3) {
			// alert("Share by Twitter clicked");
			shareAction = "TWITTER";
		}
		
	}else
	{
		Ti.API.info('uncheck');
		e.source.backgroundImage = '/aimages/chkboxunchecked.png';
	}
	
	
}); 

$.tellAFriendWnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {

			var actionBar = $.tellAFriendWnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/tellafriendbarbkg.png');
			actionBar.setIcon('/aimages/backbtn.png');
			actionBar.onHomeIconItemSelected = function() {
				
				$.tellAFriendWnd.close();
			};
		}
	});

	var activity = $.tellAFriendWnd.activity;
	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		var addMenuItemShere = menu.add({
			
			icon : "/aimages/btnsharebkg.png",
			showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM,
			
		});
		
		addMenuItemShere.addEventListener("click", function(e) {
			//alert('share here!');
			
	if(shareAction === "EMAIL") {
		var emailDialog = Ti.UI.createEmailDialog();
		emailDialog.subject = "Hello from Titanium";
		emailDialog.toRecipients = ['nybistroapp@gmail.com'];
		emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
		
		emailDialog.open({animated:true});
		
	}else if(shareAction === "TEXT") {
		
		Titanium.Platform.openURL('sms:' + 14692887534);
		
		
	}else if(shareAction === "FACEBOOK") {
		// post predefined data
		postToFacebook();
		
	}else if (shareAction === "TWITTER") {
		
		var twitwindowobject = require('TwitterHelper');
		var tweetwindow = new twitwindowobject();
		tweetwindow.open();
		
	};
		
		
		
		
		
		
		});

	};

	
	
}


function postToFacebook() {
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
