var osname = Ti.Platform.osname;

// Global function to round the number to given digits
Alloy.Globals.roundNumber = function(number, digits) {
	multiple = Math.pow(10, digits);
    rndedNum = Math.round(number * multiple) / multiple;
    return rndedNum;
};
var cartItems = Alloy.Collections.ShoppingCart;
var roundNumber = Alloy.Globals.roundNumber;
var runningTotal = 0;

if (osname == 'iphone' || osname == 'ipad') {
var backButton = Ti.UI.createButton(
	{
		height : 26,
		width : 65,
		backgroundImage : '/images/backtohomebtn.png'	
	}
);

var navWnd = Alloy.Globals.navWnd;

// Set event handler to close current window on back button
backButton.addEventListener('click', function()
{
	navWnd.closeWindow($.cartwnd);
});

// Set as left nav button for current window
$.cartwnd.setLeftNavButton(backButton);
$.cartwnd.setBarImage('/images/cartbarbkg.png');
}
else if(osname ==='android'){
	
	$.cartwnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			
			var actionBar = $.cartwnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/cartbarbkg.png');
			actionBar.setIcon('/aimages/arrowbutton.png');
			actionBar.onHomeIconItemSelected = function(){
				$.cartwnd.close();
			};
		}
	});
}
	
/*
var tbldata = [];
for(var i=0;i<3;i++) {
	var row = Alloy.createController('shoppingcartrow', {
		primaryLabel: 'Item ' + i,
		subTitle: 'Subtitle ' + i,
		rownum: i
	}).getView();
	
	tbldata.push(row);
} // end for loop


$.theTable.data = tbldata;*/

// Function to recalculate the total when collection changes
// i.e. items are removed or added or changed
function reCalculateTotal() {
	// reset running total
	runningTotal = 0;
	
	cartItems.forEach(function(item) {
		runningTotal = runningTotal + item.get("Total");
	});
	
	// Round off the total
	runningTotal = roundNumber(runningTotal,2);
	
	$.lblSubtotalVal.text = "$" + runningTotal;
}

// Hook onto fetch event to calculate total
cartItems.on("fetch",function() {
	reCalculateTotal();
});

// Hook into remove event for collection
cartItems.on("remove", function(){ reCalculateTotal(); });

$.qtyOptions.addEventListener('click',function(e) {
	// alert(e);
	var newQty = e.index + 1;	
	
	// Set new quantity on cart item
	cartItem.set("Quantity",newQty);
	
	// Calculate new total for item
	cartItem.set("Total", roundNumber(newQty*cartItem.get("ItemPrice"),2));
	
	// Recalculate total
	reCalculateTotal();
});

// Fetch collection to populate table
cartItems.fetch();

$.theTable.addEventListener('click', function(e){
	//alert(e.source.id.toString() + ' ' + e.index);
	
	if (osname == 'iphone' || osname == 'ipad') {
		cartItem = cartItems.at(e.index);
		if(e.source.toString() === '[object btnDelete]') {	
			// Remove from collection and destroy the model
			cartItems.remove(cartItem);
			cartItem.destroy();
		}else if(e.source.toString() === '[object btnChangeQty]') {
			$.qtyOptions.show();
		}
	}
	
	else if(osname ==='android'){
		cartItem = cartItems.at(e.index);
		if(e.source.id.toString() === 'btnDelete') {	
			// Remove from collection and destroy the model
			cartItems.remove(cartItem);
			cartItem.destroy();
		}else if(e.source.id.toString() === 'btnChangeQty') {
			$.qtyOptions.show();
		}	
	}
});

// Hook into quantity chnage options dialogue

$.btnCheckout.addEventListener('click', function() {
			
		// Create the Order model instance
		var order = Alloy.Models.instance("Order");
		order.set("OrderId",10);
		
		// Fill the array with line items in shopping cart
		var lineItems = new Array();
		
		for( i=0; i < cartItems.length; i++) {
			lineItems[i] = cartItems.at(i);	
		}
		
		// Set line items				
		order.set("LineItems",JSON.stringify(lineItems));
		
		// Set order subtotal
		order.set("SubTotal", runningTotal);
			
			
		//Open the order processing window
		if (osname == 'iphone' || osname == 'ipad') {
		var processOrderWnd = Alloy.createController('processorder').getView();
		navWnd.openWindow(processOrderWnd, {animated:true});
		}else if(osname ==='android'){
			var processOrderWnd = Alloy.createController('processorder').getView();
			processOrderWnd.open();
		}
	});
