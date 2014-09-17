var args = arguments[0] || {};

// Get the items in this subcategorydetails
var subcatid = args.subcatid;
var osname = Ti.Platform.osname;
var aUser;
var menuItems = Alloy.Collections.MenuItem;

//alert('>>>>'+menuItems);

if (osname == 'iphone' || osname == 'ipad') {

	// Create custom back button
	var backButton = Ti.UI.createButton({
		height : 26,
		width : 65,
		backgroundImage : '/images/backbtn.png'
	});

	var navWnd = Alloy.Globals.navWnd;

	// Set event handler to close current window on back button
	backButton.addEventListener('click', function() {
		navWnd.closeWindow($.winCatDetails);
	});

	// Set as left nav button for current window
	$.winCatDetails.setLeftNavButton(backButton);
	$.winCatDetails.setBarImage('/images/categorydetailsbarbkg.png');

} else if (Ti.Platform.osname == "android") {
	// Event listener for adding action bar.
	$.winCatDetails.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.winCatDetails.getActivity().actionBar;
			actionBar.setTitle('DETAILS');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/toolbarbg.png');
			actionBar.setIcon('/aimages/backbtn.png');
			actionBar.onHomeIconItemSelected = function() {
				var homeWin = Alloy.createController('index').getView();
				homeWin.open();
				$.winCatDetails.close();
			};
		}
	});
}

//Event listner for table
$.theTable.addEventListener('click', function(e) {
	
	var item = menuItems.at(e.row.menuitemid-1);
	
	//var item = menuItems.get(e.row.menuitemid);
	//alert(item.toJSON());
	
	if (osname == 'iphone' || osname == 'ipad') {

		var itemDetailsWnd = Alloy.createController('itemdetails', {
			itemdata:item
		}).getView();
		navWnd.openWindow(itemDetailsWnd, {
			animated : true
		});
	} else if (osname === 'android') {

		var itemdetailwin = Alloy.createController('itemdetails', {
			itemdata:item
		}).getView();
		itemdetailwin.open();
	}
	;

});

// Tap into window "focus" event to login to ACS
$.winCatDetails.addEventListener('focus', function(e) {
	loginUser();
});
$.winCatDetails.addEventListener('blur', function(e) {
	logoutUser();
});

// Fetch the menuitems collection
menuItems.fetch();

// Function to filter out menu items as per sub category
function filterFunction(collection) {

	//return collection filtered on subcategory ids
	return collection.where({
		SubCatId : subcatid
	});
}

// Add $ sign to price attribute
function transformFunction(model) {
	//alert("Hi I am in transformation");
	// Need to convert the model to a JSON object
	var transform = model.toJSON();
	transform.Price = '$' + transform.Price;

	return transform;
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