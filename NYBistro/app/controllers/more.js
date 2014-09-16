var osname = Ti.Platform.osname;
if (osname === 'iphone') {
// Create custom back button
var backButton = Ti.UI.createButton(
	{
		height : 26,
		width : 65,
		backgroundImage: '/images/backtohomebtn.png'		
	}
);

var navWnd = Alloy.Globals.navWnd;

// Set event handler to close current window on back button
backButton.addEventListener('click', function()
{
	navWnd.closeWindow($.moreWnd);
});

// Set as left nav button for current window
$.moreWnd.setLeftNavButton(backButton);
$.moreWnd.setBarImage('/images/morebarbkg.png');

var tbldata = [];
for(var i=0;i<2;i++) {
	var row = Alloy.createController('morerow', {
		rownum: i
	}).getView();
	
	tbldata.push(row);
} // end for loop

$.moreTable.data = tbldata;


} else if (osname === 'android') {
	
	var tbldata = [];
for(var i=0;i<2;i++) {
	var row = Alloy.createController('morerow', {
		rownum: i
	}).getView();
	
	tbldata.push(row);
} // end for loop

$.moreTable.data = tbldata;


$.moreWnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {

			var actionBar = $.moreWnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/morebarbkg.png');
			actionBar.setIcon('/aimages/arrowbutton.png');
			actionBar.onHomeIconItemSelected = function() {
				
				$.moreWnd.close();
			};
		}
	});
	
	$.moreTable.footerView = Ti.UI.createView({
    height: 1,
    backgroundColor: 'transparent'
});
	
}

$.moreTable.addEventListener('click',function(e) {
	
	if(e.index == 0) {
	if (osname === 'iphone') {
	
		
		var tellAfrndWnd = Alloy.createController('tellafriend').getView();
		navWnd.openWindow(tellAfrndWnd,{animated:true});
	
	}else if(osname === 'android'){
		
		var tellAfrndWnd = Alloy.createController('tellafriend').getView();
		tellAfrndWnd.open();
		
	}
	}
	
	else if(e.index == 1)
	{
		Ti.Platform.openURL('http://www.google.com');
	}
}); 