var osname = Ti.Platform.osname;
var couponsCol = Alloy.Collections.Coupon;

// Get the downloaded coupons collection
var downloadedCoupons = Alloy.createCollection("CouponLocal");

if (downloadedCoupons != null) {
	// Fetch collection from local storage
	downloadedCoupons.fetch({
		query : "SELECT * FROM CouponLocal"
	});

	// If we got any downloaded coupons, then build an array of their ids
	var downloadedCouponIds = [];
	for (var i = 0; i < downloadedCoupons.length; i++) {
		downloadedCouponIds.push(downloadedCoupons.at(i).get("CouponId"));
	}
}

if (osname === 'iphone' || osname == 'ipad') {
	// Create custom back button
	var backButton = Ti.UI.createButton({
		height : 26,
		width : 65,
		backgroundImage : '/images/backtohomebtn.png'
	});

	var navWnd = Alloy.Globals.navWnd;

	// Create custom right "My Coupons" button
	var myCouponsBtn = Ti.UI.createButton({
		height : 26,
		width : 75,
		title : 'My Coupons',
		textAlign : 'TEXT_ALIGNMENT_CENTER',
		font : {
			fontFamily : 'Arial',
			fontSize : 11,
			fontWeight : 'bold'
		},
		color : '#ebbca3',
		backgroundImage : '/images/mycouponsbkg.png'
	});

	// Set as left and right nav button for current window
	$.couponswnd.setLeftNavButton(backButton);
	$.couponswnd.setRightNavButton(myCouponsBtn);

	// Set nav bar background to the coupons bkg.
	$.couponswnd.setBarImage('/images/couponsbarbkg.png');

	// Set event handler to close current window on back button
	backButton.addEventListener('click', function() {
		navWnd.closeWindow($.couponswnd);
	});

	// Set event handler for opening downloaded coupons by user
	myCouponsBtn.addEventListener('click', function() {
		//Open the my coupons window
		var myCouponsWnd = Alloy.createController('mycoupons').getView();
		navWnd.openWindow(myCouponsWnd, {
			animated : true
		});
	});

};

if (osname === 'android') {

	$.couponswnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {

			var actionBar = $.couponswnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/couponsbarbkg.png');
			actionBar.setIcon('/aimages/arrowbutton.png');
			actionBar.onHomeIconItemSelected = function() {

				$.couponswnd.close();
			};
		}
	});

	var activity = $.couponswnd.activity;
	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		var addMenuItem = menu.add({
			title : "My Coupons",
			font : {
				fontFamily : 'Arial',
				fontSize : 15,
				fontWeight : 'bold'
			},
			color : "#D0ec9b",
			//icon : "/aimages/buttonbg.png",
			showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM,

		});
		addMenuItem.addEventListener("click", function(e) {
			var mycoupondetailsWin = Alloy.createController('mycoupons').getView();
			mycoupondetailsWin.open();
		});

	};

}

// Get appropriate images as per coupon type for IOS
function transformFunction(model) {
	// Need to convert the model to a JSON object
	var transform = model.toJSON();

	if (_.indexOf(downloadedCouponIds, model.get("CouponId")) > -1) {
		model.set("Status", "downloaded");
		transform.CouponImage = "images/downloadedcoupon.png";
		transform.ArrowImage = "images/arrowbrown.png";
	} else {
		model.set("Status", "new");
		transform.CouponImage = "images/newcoupon.png";
		transform.ArrowImage = "images/arrowgreen.png";
	}
	return transform;
}

// Get appropriate images as per coupon type for android
function transformandroiFunction(model) {
  
  // Need to convert the model to a JSON object
	var transform = model.toJSON();

	if (_.indexOf(downloadedCouponIds, model.get("CouponId")) > -1) {
		model.set("Status", "downloaded");
		transform.CouponImage = "/aimages/downloadcoupon.png";
		transform.ArrowImage = "/aimages/arrow1.png";
	} else {
		model.set("Status", "new");
		transform.CouponImage = "/aimages/newcoupon.png";
		transform.ArrowImage = "/aimages/arrowgreen.png";
	}
	return transform;
  
}

$.theTable.addEventListener('click', function(e) {
	//Open the coupon details window
	var coupon = couponsCol.at(e.index);
	
	Ti.API.info('Image url'+coupon.CouponImage);
	
	if (osname === 'iphone') {

		//Open the coupon details window
		var couponDetailsWnd = Alloy.createController('coupondetails', {
			coupondata : coupon
		}).getView();
		navWnd.openWindow(couponDetailsWnd, {
			animated : true
		});

	} else if (osname === 'android') {

		var couponDetailsWnd = Alloy.createController('coupondetails', {
			coupondata : coupon
		}).getView();
		couponDetailsWnd.open();
	}
	;
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
$.couponswnd.addEventListener('focus', function(e) {
	//loginUser();
});
$.couponswnd.addEventListener('blur', function(e) {
	//logoutUser();
});

// Fetch the coupons collection
couponsCol.fetch();

