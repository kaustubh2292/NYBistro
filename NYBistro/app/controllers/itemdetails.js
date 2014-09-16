var osname = Ti.Platform.osname;
var args = arguments[0] || {};
var item = args.itemdata;
if (osname === 'iphone') {

	// Create custom back button
	var backButton = Ti.UI.createButton({
		height : 26,
		width : 65,
		backgroundImage : '/images/backbtn.png'
	});

	var navWnd = Alloy.Globals.navWnd;

	// Set event handler to close current window on back button
	backButton.addEventListener('click', function() {
		navWnd.closeWindow($.winItemDetails);
	});

	// Create custom right "Add" button
	var addButton = Ti.UI.createButton({
		height : 26,
		width : 55,
		backgroundImage : '/images/addbtn.png'
	});

	addButton.addEventListener('click', function() {
		//alert('add to cart clicked');

		// Create an instance of Shopping cart
		var shoppingCart = Alloy.createModel("ShoppingCart", {
			ItemName : $.lblFoodName.text,
			ItemPrice : $.menuItemDetails.get("Price"),
			Quantity : Number($.lblQtyNum.text),
			Total : (Number($.lblQtyNum.text) * $.menuItemDetails.get("Price"))
		});

		shoppingCart.save();

		alert("Item added to your cart");

		// Create singleton instance of shopping cart collection...
		var shoppingCartItems = Alloy.Collections.instance("ShoppingCart");
		shoppingCartItems.add(shoppingCart);
	});

	// Set as left nav button for current window
	$.winItemDetails.setLeftNavButton(backButton);

	// Set right nav button as add button
	$.winItemDetails.setRightNavButton(addButton);

	$.winItemDetails.setBarImage('/images/itemdetailsbkg.png');

	// Click handlers for add and subtract quantity
	$.btnAdd.addEventListener('click', function() {
		$.lblQtyNum.text = Number($.lblQtyNum.text) + 1;
	});

	$.btnSub.addEventListener('click', function() {
		if(Number($.lblQtyNum.text)>0){
		$.lblQtyNum.text = Number($.lblQtyNum.text) - 1;
		}
	});

} else if (osname === 'android') {

	$.winItemDetails.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {

			var actionBar = $.winItemDetails.getActivity().actionBar;
			actionBar.setTitle('ITEM DETAILS');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/toolbarbg.png');
			actionBar.setIcon('/aimages/backbtn.png');
			actionBar.onHomeIconItemSelected = function() {
				//var homeWin = Alloy.createController('index').getView();
				//homeWin.open();
				$.winItemDetails.close();
			};
		}
	});

	var activity = $.winItemDetails.activity;
	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;
		var opencartIcon = menu.add({
			title : "Open cart",
			icon : "aimages/cart.png",
			height:70,
			width:70,
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,

		});
		opencartIcon.addEventListener("click", function(e) {
			var wndcart = Alloy.createController('shoppingcart').getView();
			wndcart.open();
		});

	};
	
	$.btnAddtoCart.addEventListener("click", function(e) {
			//alert('add to cart clicked');
				// Create an instance of Shopping cart
		var shoppingCart = Alloy.createModel("ShoppingCart", {
			ItemName : $.lblFoodName.text,
			ItemPrice : $.menuItemDetails.get("Price"),
			Quantity : Number($.lblQtyNum.text),
			Total : (Number($.lblQtyNum.text) * $.menuItemDetails.get("Price"))
		});

		shoppingCart.save();

		alert("Item added to your cart");
		});
	
	$.btnAdd.addEventListener('click', function() {
		$.lblQtyNum.text = Number($.lblQtyNum.text) + 1;
	});

	$.btnSub.addEventListener('click', function() {
		if(Number($.lblQtyNum.text)>0){
		$.lblQtyNum.text = Number($.lblQtyNum.text) - 1;
		}
	});

	$.lblPrice.text = '$24.00';

	var first = true;
	$.txtSpecInstruct.addEventListener('focus', function f(e) {
		if (first) {
			first = false;
			$.txtSpecInstruct.blur();
		} else {
			$.txtSpecInstruct.removeEventListener('focus', f);
		}
	});

}

$.menuItemDetails = _.extend({}, $.menuItemDetails, {
    transform : function() {
        return dataTransformation(this);
    }
});

// instance variable used in data-binding
// we do this set here to trigger the events
// that will cause the data to be rendered
$.menuItemDetails.set(item.attributes);

/**
 * being used for rendering the model in the view
 * via data-binding
 *
 * @param {Object} _model
 */
function dataTransformation(_model) {

    var json = _model.toJSON();  
    json.Price = "$" + json.Price;
    
    return json;
}