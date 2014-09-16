var osname = Ti.Platform.osname;
// Create custom back button
var myCoupons = Alloy.Collections.CouponLocal;
if (osname=='iphone'||osname=='ipad') {
var backButton = Ti.UI.createButton(
	{
		height : 26,
		width : 65,
		backgroundImage : '/images/backtocoupons.png'	
	}
);

var navWnd = Alloy.Globals.navWnd;

// Set as left nav button for current window
$.myCouponsWin.setLeftNavButton(backButton);

// Set nav bar background to the coupons bkg.
$.myCouponsWin.setBarImage('/images/mycouponsbarbkg.png');

// Set event handler to close current window on back button
backButton.addEventListener('click', function()
{
	navWnd.closeWindow($.myCouponsWin);
});
}



$.theTable.addEventListener('click', function(e){
	//Open the coupon details window
	var localcoupon = myCoupons.at(e.index);
	if (osname=='iphone'||osname=='ipad'){
		
	//Open the coupon details window
	var couponDetailsWnd = Alloy.createController('coupondetails',{coupondata:localcoupon}).getView();
	navWnd.openWindow(couponDetailsWnd, {animated:true});
	
	}else if(osname ==='android'){
		//alert('hi coupondetail');
		//Open the coupon details window
	var couponDetailsWnd = Alloy.createController('coupondetails',{coupondata:localcoupon}).getView();
		couponDetailsWnd.open();
		
	}
	
	
});

if (osname === 'android') {
	
	$.myCouponsWin.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {

			var actionBar = $.myCouponsWin.getActivity().actionBar;
			actionBar.setTitle('MY COUPONS');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/toolbarbg.png');
			actionBar.setIcon('/aimages/couponbutton.png');
			actionBar.onHomeIconItemSelected = function() {
				
				$.myCouponsWin.close();
			};
		}
	});
	
}

// Get the downloaded coupons
myCoupons.fetch();

// Get appropriate images as per coupon type
function transformFunction(model) {
    // Need to convert the model to a JSON object
    var transform = model.toJSON();
    
    if(model.get("CouponType") ==="Loyalty")
    {
    	model.set("Status","downloaded");
    	transform.CouponImage = "images/loyaltycoupontag.png";
    }
    return transform;
}