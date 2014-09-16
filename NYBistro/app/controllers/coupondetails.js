var osname = Ti.Platform.osname;
var args = arguments[0] || {};
var coupon = args.coupondata;

// Set coupon name label
$.lblFoodName.text = coupon.get("CouponName");

// Set coupon description
$.lblCoupondesc.text = coupon.get("CouponDesc");

// Set the background image of the action button
status = coupon.get("Status");

if (osname == 'iphone' || osname == 'ipad') {
	//Ti.API.info('I am here in coupondetails!');
	// Create custom back button
	var backButton = Ti.UI.createButton({
		height : 26,
		width : 65,
		backgroundImage : '/images/backbtn.png'
	});

	var navWnd = Alloy.Globals.navWnd;

	// Set event handler to close current window on back button
	backButton.addEventListener('click', function() {
		navWnd.closeWindow($.winCouponDetails);
	});

	// Set as left nav button for current window
	$.winCouponDetails.setLeftNavButton(backButton);

	$.winCouponDetails.setBarImage('/images/coupondetailsbarbkg.png');

	if (status === "new") {
		$.btnAction.backgroundImage = 'images/downloadcoupon.png';
	} else if (status === "downloaded") {
		$.btnAction.backgroundImage = "images/redeemcoupon.png";
	}

} else if (osname === 'android') {

	$.winCouponDetails.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {

			var actionBar = $.winCouponDetails.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/coupondetailsbarbkg.png');
			actionBar.setIcon('/aimages/backbtn.png');
			actionBar.onHomeIconItemSelected = function() {
				$.winCouponDetails.close();
			};
		}
	});

	if (status === "new") {
		$.btnAction.backgroundImage = '/aimages/downcouponbtnbkg.png';
	} else if (status === "downloaded") {
		$.btnAction.backgroundImage = '/aimages/redeembtnbkg.png';
	}

}

// Click event handler for action button
$.btnAction.addEventListener('click', function() {
	// If it's a new coupon, then download
	if (status === "new") {
		// Create the Local coupon model instance
		localCoupon = Alloy.createModel("CouponLocal");

		// set values on local coupon
		localCoupon.set("CouponId", coupon.get("CouponId"));
		localCoupon.set("ItemId", JSON.stringify(coupon.get("ItemId")));
		localCoupon.set("CouponName", coupon.get("CouponName"));
		localCoupon.set("CouponDesc", coupon.get("CouponDesc"));
		localCoupon.set("CouponExp", coupon.get("CouponExp"));
		localCoupon.set("CouponType", coupon.get("CouponType"));
		localCoupon.set("CouponVal", coupon.get("CouponVal"));
		localCoupon.set("UsageCount", coupon.get("UsageCount"));
		localCoupon.set("CouponImage", coupon.get("CouponImage"));
		localCoupon.set("ArrowImage", coupon.get("ArrowImage"));
		localCoupon.set("Status", "downloaded");

		// Save to local storage as downloaded coupon
		localCoupon.save();

		// Fire coupondownloaded event at app level
		Ti.App.fireEvent('coupondownloaded');

		alert("Coupon is successfully downloaded to your device.");

	} else if (status === "downloaded") {
		// This is redeem action
		if (coupon.get("CouponType") === "Loyalty") {
			// Redeem will show the screen to enter code and decrease the count
		} else {
			// Regular coupon needs to fire an event with coupon data
			Ti.App.fireEvent('applycoupon', {
				coupondata : coupon.toJSON()
			});

			// Remove coupon from downloaded database
		}
	}
});
