var args = arguments[0] || {};
var osname = Ti.Platform.osname;

// Get the singleton order data
var orderData = Alloy.Models.instance("Order");

var roundNumber = Alloy.Globals.roundNumber;

// Global function to round the number to given digits
var roundNumber = function(number, digits) {
	multiple = Math.pow(10, digits);
	rndedNum = Math.round(number * multiple) / multiple;
	return rndedNum;
};
var user = Alloy.Models.instance("user");

// Set subtotal
$.lblSubtotalVal.text = "$" + orderData.get("SubTotal");

// Set total = subtotal + taxes
orderTotal = roundNumber((orderData.get("SubTotal") + 2.30), 2);
orderData.set("Total", orderTotal);
$.lblTotalVal.text = "$" + orderTotal;

var optionsCol = Alloy.Collections.OptionalItem;
optionsCol.fetch();

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
		navWnd.closeWindow($.orderWnd);
	});

	// Set as left nav button for current window
	$.orderWnd.setLeftNavButton(backButton);
	$.orderWnd.setBarImage('/images/orderdetailsbarbkg.png');

	var optChargeCnt = 0;

	$.optionsTable.addEventListener('click', function(e) {
		if (e.source.toString() == '[object imgCheckBox]') {
			var chkbox = e.source;

			if (chkbox.backgroundImage == '/images/chkboxunchecked.png') {
				chkbox.backgroundImage = '/images/chkboxchecked.png';

				$.optionalCharges.animate({
					duration : 200,
					height : '30',
					curve : Ti.UI.ANIMATION_CURVE_LINEAR
				});
				optChargeCnt++;

				// Get the optional item price and add it to sub total
				var optionalItem = optionsCol.at(e.index);
				orderData.set("Total", roundNumber(orderData.get("Total") + optionalItem.get("Price"),2));
			
				// Set new total
				$.lblTotalVal.text = "$" + orderData.get("Total");
			
				// Update order's options total
				orderData.set("OptionsTotal", roundNumber(orderData.get("OptionsTotal") + optionalItem.get("Price"),2));
				
				// Update label for options total
				$.lblOptChargesVal.text = "$" + orderData.get("OptionsTotal");

			} else if (chkbox.backgroundImage == '/images/chkboxchecked.png') {
				chkbox.backgroundImage = '/images/chkboxunchecked.png';

				optChargeCnt--;
			
				// Get the optional item price and remove it from sub total
				var optionalItem = optionsCol.at(e.index);
						
				// Update order subtotal
				orderData.set("Total", roundNumber(orderData.get("Total") - optionalItem.get("Price"),2));
			
				// Set new total
				$.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"),2);
				
				// Update order's options total
				orderData.set("OptionsTotal", roundNumber(orderData.get("OptionsTotal") - optionalItem.get("Price"),2));
			
				// Update label for options total
				$.lblOptChargesVal.text = "$" + orderData.get("OptionsTotal");

				if (optChargeCnt <= 0) {
					$.optionalCharges.animate({
						duration : 200,
						height : '0.1',
						curve : Ti.UI.ANIMATION_CURVE_LINEAR
					});
				}
			}
		}
	});

	var movelabel = Ti.UI.createAnimation({
		duration : 1000,
		curve : Ti.UI.ANIMATION_CURVE_EASE_OUT
	});
	var collapsed = true;

	$.btnShowHideOptions.addEventListener('click', function() {
		if (collapsed) {
			// Animation values
			var showtable = Ti.UI.createAnimation({
				duration : 200,
				height : '30%',
				curve : Ti.UI.ANIMATION_CURVE_LINEAR
			});

			// Start the Animation.
			$.deliveryOptions.animate(movelabel, function() {
				$.optionsTable.animate(showtable);
			});

			$.btnShowHideOptions.backgroundImage = "/images/uparraow.png";
			collapsed = false;
		} else {
			// Hide options
			var hidetable = Ti.UI.createAnimation({
				duration : 200,
				height : '0.1',
				curve : Ti.UI.ANIMATION_CURVE_LINEAR
			});

			// Start the Animation.
			$.deliveryOptions.animate(movelabel, function() {
				$.optionsTable.animate(hidetable);
			});

			$.btnShowHideOptions.backgroundImage = "/images/downarraow.png";
			collapsed = true;
		}
	});

	var delChargesAdded = false;

	$.delOptionsBar.addEventListener('click', function(e) {
		if (e.index == 1) {
			$.delCharges.animate({
				duration : 200,
				height : '30',
				curve : Ti.UI.ANIMATION_CURVE_LINEAR
			});
			delChargesAdded = true;

			// Set delivery charges on order
			orderData.set("DeliveryCharge", 1.99);

			// Set OrderType as "Delivery"
			orderData.set("OrderType", "Delivery");
			
			// Update total
			orderData.set("Total",roundNumber(orderData.get("DeliveryCharge") + orderData.get("Total"),2));
		
		} else if (delChargesAdded) {

			// Set delivery charges on order
			orderData.set("DeliveryCharge", 0);

			if (e.index === 0) {
				orderData.set("OrderType", "Carry Out");
			} else {
				orderData.set("OrderType", "Eat Here");
			}
			
			// Update total
			orderData.set("Total",roundNumber(orderData.get("Total") - orderData.get("DeliveryCharge"),2));
			
			$.delCharges.animate({
				duration : 200,
				height : '0.01',
				curve : Ti.UI.ANIMATION_CURVE_LINEAR
			});
			delChargesAdded = false;
		}
	});

	////Android

}
else if (osname === 'android') {

	/*
	var tbldata = [];
	for (var i = 0; i < 5; i++) {
	var row = Alloy.createController('optionsrow', {
	optionname : 'Optional item ' + i,
	optionprice : '$ ' + i + '.99',
	rownum : i
	}).getView();
	tbldata.push(row);
	}// end for loop
	*/

	//Ti.API.info('Table Data length = ' + tbldata.length);

	//$.optionsTable.data = tbldata;

	$.orderWnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.orderWnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/orderdetailsbarbk.png');
			actionBar.setIcon('/aimages/backbtn.png');
			actionBar.onHomeIconItemSelected = function() {

				$.orderWnd.close();
			};
		}
	});

	var optChargeCnt = 0;

	$.optionsTable.addEventListener('click', function(e) {
		Ti.API.info('>>>>>>>>>' + e.source.toString());
		if (e.source.toString() == '[object Button]') {
			var chkbox = e.source;

			if (chkbox.backgroundImage == '/aimages/chkboxunchecked.png') {
				chkbox.backgroundImage = '/aimages/chkboxchecked.png';

				$.optionalCharges.animate({
					duration : 200,
					height : '30dp',
					
				});
				optChargeCnt++;

				// Get the optional item price and add it to sub total
				var optionalItem = optionsCol.at(e.index);
				orderData.set("Total", roundNumber(orderData.get("Total") + optionalItem.get("Price"),2));
			
				// Set new total
				$.lblTotalVal.text = "$" + orderData.get("Total");
			
				// Update order's options total
				orderData.set("OptionsTotal", roundNumber(orderData.get("OptionsTotal") + optionalItem.get("Price"),2));
				
				// Update label for options total
				$.lblOptChargesVal.text = "$" + orderData.get("OptionsTotal");

			} else if (chkbox.backgroundImage == '/aimages/chkboxchecked.png') {
				chkbox.backgroundImage = '/aimages/chkboxunchecked.png';

				optChargeCnt--;
			
				// Get the optional item price and remove it from sub total
				var optionalItem = optionsCol.at(e.index);
						
				// Update order subtotal
				orderData.set("Total", roundNumber(orderData.get("Total") - optionalItem.get("Price"),2));
			
				// Set new total
				$.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"),2);
			
				// Update order's options total
				orderData.set("OptionsTotal", roundNumber(orderData.get("OptionsTotal") - optionalItem.get("Price"),2));
			
				// Update label for options total
				$.lblOptChargesVal.text = "$" + orderData.get("OptionsTotal");

				if (optChargeCnt <= 0) {
					$.optionalCharges.animate({
						duration : 200,
						height : '0.1',
						
					});
				}
			}
		}
	});

	var movelabel = {
		top : '15dp',
		duration : 1000
	};
	var collapsed = true;

	/*
	 $.btnShowHideOptions.addEventListener('click', function() {

	 if (collapsed) {

	 var showtable = Titanium.UI.createAnimation();
	 showtable.height = '45%';
	 showtable.duration = 400;

	 $.btnShowHideOptions.backgroundImage = "/aimages/uparraow.png";

	 $.optiontablecontainer.animate({

	 height : '30%',
	 duration : 200

	 });
	 ;

	 collapsed = false;
	 } else {

	 var hidetable = Titanium.UI.createAnimation();
	 hidetable.height = '0.1';
	 hidetable.duration = 200;
	 $.btnShowHideOptions.backgroundImage = "/aimages/downarraow.png";

	 $.optiontablecontainer.animate({

	 height : '0.1%',
	 duration : 300
	 });

	 var optionalItem = optionsCol.at(0);

	 Ti.API.info('table animated for hide' + '>>>>>' + ($.optionsTable.getData( )).length);
	 collapsed = true;

	 }
	 });*/
	
	var delChargesAdded = false;
	
	$.btnDelivery.addEventListener('click', function() {

		$.delCharges.animate({
			duration : 200,
			height : '30dp'
		});

		$.btnCarryOut.backgroundColor = "#fff";
		$.btnEathere.backgroundColor = "#fff";
		$.btnDelivery.backgroundColor = "blue";

		$.lblDelChargesVal.text = "$1.99";
		// Set delivery charges on order
		orderData.set("DeliveryCharge", 1.99);
		// Set OrderType as "Delivery"
		orderData.set("OrderType", "Delivery");
		
		// Update total
		orderData.set("Total",roundNumber(orderData.get("DeliveryCharge") + orderData.get("Total"),2));
		// Set new total
		$.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"),2);
	});

	$.btnCarryOut.addEventListener('click', function() {

		$.btnCarryOut.backgroundColor = "blue";
		$.btnEathere.backgroundColor = "#fff";
		$.btnDelivery.backgroundColor = "#fff";
		$.delCharges.animate({
			duration : 200,
			height : '0.01'
		});
		
		// Update total
		orderData.set("Total",roundNumber(orderData.get("Total") - orderData.get("DeliveryCharge"),2));
		// Set new total
		$.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"),2);
				
		// Set delivery charges on order
		orderData.set("DeliveryCharge", 0);
		// Set OrderType as "Carry Out"
		orderData.set("OrderType", "Carry Out");
	});
	
	$.btnEathere.addEventListener('click', function() {
		$.btnCarryOut.backgroundColor = "#fff";
		$.btnEathere.backgroundColor = "blue";
		$.btnDelivery.backgroundColor = "#fff";
		$.delCharges.animate({
			duration : 200,
			height : '0.01'
		});	
		
		// Update total
		orderData.set("Total",roundNumber(orderData.get("Total") - orderData.get("DeliveryCharge"),2));
		// Set new total
		$.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"),2);
		
		// Set delivery charges on order
		orderData.set("DeliveryCharge", 0);
		// Set OrderType as "Eat Here"
		orderData.set("OrderType", "Eat Here");
		
	});


	$.btnCash.addEventListener('click', function() {

		$.btnCash.backgroundColor = "blue";
		$.btnCreditCard.backgroundColor = "#fff";
		$.btnPaypal.backgroundColor = "#fff";
		
		$.btnPlaceOrder.addEventListener('click', function() {
		
		// Create the Order model instance	
		var order = Alloy.Models.instance("Order");
		order.set("OrderId",10);
		
		var total = roundNumber(orderData.get("Total"),2);
		
		// Set order total
		order.set("Total", total);
		
		//Open the cash info window
		if (osname == 'iphone' || osname == 'ipad') {
			var cInfoWnd = Alloy.createController('cashInfo').getView();
			navWnd.openWindow(cInfoWnd, {animated:true});
		}else if(osname ==='android'){
			var cInfoWnd = Alloy.createController('cashInfo').getView();
			cInfoWnd.open();
		}
	
		});
	});

	$.btnCreditCard.addEventListener('click', function() {

		$.btnCreditCard.backgroundColor = "blue";
		$.btnCash.backgroundColor = "#fff";
		$.btnPaypal.backgroundColor = "#fff";
		
		$.btnPlaceOrder.addEventListener('click', function() {
		//Open the credit card info window
		if (osname == 'iphone' || osname == 'ipad') {
			var ccInfoWnd = Alloy.createController('creditcardinfo').getView();
			navWnd.openWindow(ccInfoWnd, {animated:true});
		}else if(osname ==='android'){
			var ccInfoWnd = Alloy.createController('creditcardinfo').getView();
			ccInfoWnd.open();
		}
	
		});
	});

	$.btnPaypal.addEventListener('click', function() {

		$.btnPaypal.backgroundColor = "blue";
		$.btnCash.backgroundColor = "#fff";
		$.btnCreditCard.backgroundColor = "#fff";
	});

}

/*function loginUser() {
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
*/
// Tap into window "focus" event to login to ACS
$.orderWnd.addEventListener('focus', function(e) {
	///loginUser();
	Ti.App.removeEventListener('applycoupon',applyCouponListener);
});
/*$.orderWnd.addEventListener('blur', function(e) {
	//logoutUser();
});*/

//var sessionID = user.hasStoredSession;
//Ti.API.info('Session = '+sessionID);

// Add $ sign to price attribute
function transformFunction(model) {
	// Need to convert the model to a JSON object
	var transform = model.toJSON();
	transform.Price = '$' + transform.Price;

	return transform;
}

// Array for storing coupon data
var appliedCoupons = [];

function applyCouponListener(e) {
	// Set table and lable height
	$.couponsInfo.height = '30';
	$.couponsTable.height = Ti.UI.SIZE;

	// Get line items order in an array to compare with coupon items
	lineitems = eval(orderData.toJSON().LineItems);

	// Check type of coupon
	if (e.coupondata.CouponType === "Regular") {
		// Get list of items this coupon applies to
		couponitems = [];
		couponitems = JSON.parse(e.coupondata.ItemId);

		// Loop through list of lineitems and if a match is found to coupon item, apply discount
		for (var i = 0; i < lineitems.length; i++) {
			lineitem = lineitems[i];

			if (_.indexOf(couponitems, lineitem.ItemId) > -1) {
				// Remove coupon val from order subtotal
				//newSubTotal = orderData.get("SubTotal") - e.coupondata.CouponVal;

				//alert(newSubTotal);
				//orderData.set("SubTotal", newSubTotal);

				// Set new subtotal
				//$.lblSubtotalVal.text = "$" + orderData.get("SubTotal");
				
				// Update total
				orderData.set("Total",roundNumber(orderData.get("Total") - e.coupondata.CouponVal,2));
				// Set new total
				$.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"),2);
			}
		}
	} else if (e.coupondata.CouponType === "Discount") {
		// Remove coupon val from order subtotal
		//newSubTotal = orderData.get("SubTotal") - ((orderData.get("SubTotal") * e.coupondata.CouponVal) / 100);

		// alert(newSubTotal);

		//orderData.set("SubTotal", newSubTotal);

		// Set new subtotal
		//$.lblSubtotalVal.text = "$" + orderData.get("SubTotal");
		
		// Update total
		orderData.set("Total",roundNumber(orderData.get("Total") - ((orderData.get("Total") * e.coupondata.CouponVal) / 100)),2);
		// Set new total
		$.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"),2);
	}

	// Create applied coupons row controller
	var appliedCouponRow = Alloy.createController("appliedcouponrow", {
		couponName : e.coupondata.CouponName,
		discountVal : e.coupondata.CouponVal,
		couponType : e.coupondata.CouponType
	}).getView();

	// push into the array
	appliedCoupons.push(appliedCouponRow);

	// Set table data
	$.couponsTable.data = appliedCoupons;
}

// Click event handler for apply coupon button
$.btnApplyCoupon.addEventListener('click', function(e) {
	// Event listener for global applycoupon event
	Ti.App.addEventListener('applycoupon', applyCouponListener);

	//Open the my coupons window
	if (osname == 'iphone' || osname == 'ipad') {
	var myCouponsWnd = Alloy.createController('mycoupons').getView();
	navWnd.openWindow(myCouponsWnd, {
		animated : true
	});
	}else if(osname === 'android') {
		var myCouponsWnd = Alloy.createController('mycoupons').getView();
		myCouponsWnd.open();
	}
});

/*
$.btnPlaceOrder.addEventListener('click', function() {
	//Open the credit card info window
	if (osname == 'iphone' || osname == 'ipad') {
		var ccInfoWnd = Alloy.createController('creditcardinfo').getView();
		navWnd.openWindow(ccInfoWnd, {animated:true});
	}else if(osname ==='android'){
		var ccInfoWnd = Alloy.createController('creditcardinfo').getView();
		ccInfoWnd.open();
	}
	
});*/

