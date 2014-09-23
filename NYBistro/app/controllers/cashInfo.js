// Test fot GIT

var osname = Ti.Platform.osname;

var orderData = Alloy.Models.instance("Order");
// Set total
$.lblTotalVal.text = "$" + orderData.get("Total");


if (osname == 'iphone' || osname == 'ipad') {
// Create custom back button
var backButton = Ti.UI.createButton(
	{
		height : 26,
		width : 65,
		backgroundImage: '/images/backbtn.png'		
	}
);

var navWnd = Alloy.Globals.navWnd;

// Set event handler to close current window on back button
backButton.addEventListener('click', function()
{
	navWnd.closeWindow($.cashInfoWnd);
});

// Set as left nav button for current window
$.cashInfoWnd.setLeftNavButton(backButton);
$.cashInfoWnd.setBarImage('/images/creditcardbarbkg.png');

}

else if (osname === 'android') {
	
	$.cashInfoWnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.cashInfoWnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/creditcardbarbkg.png');
			actionBar.setIcon('/aimages/backbtn.png');
			actionBar.onHomeIconItemSelected = function() {

				$.cashInfoWnd.close();
			};
		}
	});
}

$.remainView.addEventListener('click', function(e) {
	
		$.lblRemainVal.text = "$" + ($.txtPaid.value - orderData.get("Total"));
});
	