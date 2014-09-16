var args = arguments[0] || {};
var osname = Ti.Platform.osname;
// Get the items in this subcategory
var subcatitemids = args.subcatids;
var navWnd = Alloy.Globals.navWnd;
var aUser;
//alert(subcatitemids);
if (osname=='iphone'||osname=='ipad') {
// Create custom back button
var backButton = Ti.UI.createButton(
	{
		height : 26,
		width : 65,
		backgroundImage : '/images/backbtn.png'	
	}
);



// Set event handler to close current window on back button
backButton.addEventListener('click', function()
{
	navWnd.closeWindow($.subCatWin);
});

// Set as left nav button for current window
$.subCatWin.setLeftNavButton(backButton);
$.subCatWin.setBarImage('/images/menucategorybarbkg.png');

}

$.theTable.addEventListener('click', function(e){
	 // alert(e.row.subcatid);
	 
	//Open the category details window
	if (osname=='iphone'||osname=='ipad') {
	var catDetailsWnd = Alloy.createController('categorydetails',{subcatid:e.row.subcatid}).getView();
	navWnd.openWindow(catDetailsWnd, {animated:true});
	}else if(osname=='android'){
		var catDetailsWnd = Alloy.createController('categorydetails',{subcatid:e.row.subcatid}).getView();
		catDetailsWnd.open();
		
	}
});

 if (osname=='android') {
 	$.subCatWin.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.subCatWin.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/menucategorybarbkg.png');
			actionBar.setIcon('/aimages/backbtn.png');
			actionBar.onHomeIconItemSelected = function() {
				
				$.subCatWin.close();
			};
		}
	});
 }

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
$.subCatWin.addEventListener('focus',function(e) { loginUser(); });
$.subCatWin.addEventListener('blur', function(e) { logoutUser();});

// Fetch the subcategories collection
Alloy.Collections.SubCategory.fetch();

function filterFunction(collection) {
	
    //return collection filtered on subcategory ids
    return collection.select(function(model){
		    return (_.indexOf(subcatitemids, model.get("SubCatId")) > -1);
		  });
}