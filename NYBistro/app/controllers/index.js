var osname = Ti.Platform.osname;
function doClick(e) {
	Titanium.API.info("You clicked the button");
};

function menuClicked(e) {
	if (osname === 'iphone' || osname == 'ipad') {

		var wndmenu = Alloy.createController('menu').getView();
		$.homeWin.openWindow(wndmenu, {
			animated : true
		});

	} else if (osname === 'android') {

		var wndmenu = Alloy.createController('menu').getView();
		wndmenu.open();

	}
	;
};

function mapClicked(e) {
	if (osname === 'iphone' || osname == 'ipad') {
	var wndmap = Alloy.createController('map').getView();
	$.homeWin.openWindow(wndmap, {
		animated : true
	});
	}
	else if (osname === 'android') {
		//var wndmap = Alloy.createController('map').getView();
		//wndmap.open();
		showRoute();
		
	}
};

function showRoute()
{
	var lat, longi;

		Titanium.Geolocation.purpose = "Recieve User Location";
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
		Titanium.Geolocation.distanceFilter = 10;
		
					// Hard coded Source and destination also we can provide real coordinates.
					var source = "kaspate vasti, wakad, pune";
					var destination = "shivajinagar, pune";
					Ti.Platform.openURL('http://maps.google.com/maps?t=m&saddr=' + source + '&daddr=' + destination);
};

function cartClicked(e) {
	if (osname === 'iphone' || osname === 'ipad') {
		var wndcart = Alloy.createController('shoppingcart').getView();
		$.homeWin.openWindow(wndcart, {
			animated : true
		});
	} else if (osname === 'android') {

		var wndcart = Alloy.createController('shoppingcart').getView();
		wndcart.open();

	}
};

function addUserClicked(e) {
	if (osname === 'iphone' || osname == 'ipad') {
		
	var wnduser = Alloy.createController('login').getView();
	$.homeWin.openWindow(wnduser, {
		animated : true
	});
	}else if (osname === 'android') {
		
		var wnduser = Alloy.createController('login').getView();
		wnduser.open();
	}
};

function reservationClicked(e) {
	if (osname === 'iphone' || osname == 'ipad') {
	var wndreserve = Alloy.createController('reservation').getView();
	$.homeWin.openWindow(wndreserve, {
		animated : true
	});
	}else if (osname === 'android') {
		
		var wndreserve = Alloy.createController('reservation').getView();
		wndreserve.open();
	}
};

function couponsClicked(e) {
	if (osname === 'iphone' || osname == 'ipad') {
		var wndcoupons = Alloy.createController('coupons').getView();
		$.homeWin.openWindow(wndcoupons, {
			animated : true
		});
	} else if (osname === 'android') {

		var wndcoupon = Alloy.createController('coupons').getView();
		wndcoupon.open();
	};
};

function moreClicked(e) {
	if (osname === 'iphone' || osname == 'ipad') {
	var wndmore = Alloy.createController('more').getView();
	$.homeWin.openWindow(wndmore, {
		animated : true
	});
}else if (osname === 'android') {
	var wndmore = Alloy.createController('more').getView();
	wndmore.open();
}
};

if (Ti.Platform.osname === "android") {

	// Event listener for adding action bar.
	$.homeWin.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.homeWin.getActivity().actionBar;
			//blank title
			actionBar.setTitle('');
			actionBar.setBackgroundImage('/aimages/logo1.png');
			//transparent icon
			actionBar.setIcon('/aimages/transpernt.png');

			/*
			 actionBar.onHomeIconItemSelected = function() {
			 alert('Hi you clicked the navigation bar');
			 };*/

		}
	});
}

// Store the reference to nav root
Alloy.Globals.navWnd = $.homeWin;

$.homeWin.open();
