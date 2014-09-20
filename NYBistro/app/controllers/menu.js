
var osname = Ti.Platform.osname;

if (osname=='iphone'||osname=='ipad') {
	// Create custom back button
var backButton = Ti.UI.createButton(
	{
		height : 26,
		width : 65,
		backgroundImage : '/images/backtohomebtn.png'	
	}
);

var navWnd = Alloy.Globals.navWnd;
var aUser;

// Set event handler to close current window on back button
backButton.addEventListener('click', function()
{
	navWnd.closeWindow($.menuWin);
});

// Set as left nav button for current window
$.menuWin.setLeftNavButton(backButton);
$.menuWin.setBarImage('/images/menucategorybarbkg.png');

}else
if (Ti.Platform.osname == "android") {
	// Event listener for adding action bar.
	$.menuWin.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.menuWin.getActivity().actionBar;
			actionBar.setTitle('MENU');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/toolbarbg.png');
			actionBar.setIcon('/aimages/arrowbutton.png');
			actionBar.onHomeIconItemSelected = function() {
				
				$.menuWin.close();
			};
		}
	});
}

$.theTable.addEventListener('click', function(e){
	//Open the category details window
	if (osname=='iphone'||osname=='ipad') {
		
	var catDetailsWnd = Alloy.createController("subcategories", {subcatids:e.row.SubCategories}).getView();
	var navWnd = Alloy.Globals.navWnd;
	navWnd.openWindow(catDetailsWnd, {animated:true});
		
	}else if (osname=='android') {
		
		var catDetailsWnd = Alloy.createController("subcategories", {subcatids:e.row.SubCategories}).getView();
		catDetailsWnd.open();
		
	};
	
});

function loginUser() {
    aUser = Alloy.createModel('User');
    aUser.login("nybistroadmin", "admin1234", options);
}

function logoutUser() {
	aUser.logout(options);
}

// Callback function for login success or failure
var options = {
    success : function(_m, _r) {
        Ti.API.info(' SUCCESS ' + JSON.stringify(_m));
    },
    error : function(_m, _e) {
        Ti.API.info(_e);
    }
};

// Tap into window "focus" event to login to ACS
$.menuWin.addEventListener('focus',function(e) { loginUser();});
$.menuWin.addEventListener('blur', function(e) { logoutUser();});

//var Category = Alloy.createCollection('Category'); 
// Fetch the categories collection
Alloy.Collections.Category.fetch();


