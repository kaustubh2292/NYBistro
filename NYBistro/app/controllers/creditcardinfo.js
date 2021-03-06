var osname = Ti.Platform.osname;
console.log('pickerExpDate');

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
	navWnd.closeWindow($.creditCardWnd);
});

// Set as left nav button for current window
$.creditCardWnd.setLeftNavButton(backButton);
$.creditCardWnd.setBarImage('/images/creditcardbarbkg.png');

$.btnChkBox.addEventListener('click',function(e){
	if(e.source.backgroundImage == '/images/squarechkboxbkg.png') {
		e.source.backgroundImage = '/images/squarecheckedbkg.png';
	}else {
		e.source.backgroundImage = '/images/squarechkboxbkg.png';
	}
});

//Set initial value to today’s date.
var maxDate = new Date();
$.pickerExpDate.minDate = new Date(2013, 1, 1);
$.pickerExpDate.maxDate = maxDate;
var chosenDate = $.pickerExpDate.value;
$.pickerExpDate.setLocale('de');

var slide_in =  Titanium.UI.createAnimation({duration:100, height:'50'});
var slide_out =  Titanium.UI.createAnimation({duration:100, height:'0.1'});

$.btnShowExpDate.addEventListener('click',function(e){
	if(e.source.backgroundImage == '/images/downarraow.png')
	{
		e.source.backgroundImage = '/images/uparraow.png';
		$.pickerView.animate(slide_in);
	} else if(e.source.backgroundImage == '/images/uparraow.png')
	{
		e.source.backgroundImage = '/images/downarraow.png';
		$.pickerView.animate(slide_out);
	}
});

$.pickerExpDate.addEventListener('change', function(e) {
    console.log("User selected date: " + e.value);
    chosenDate = e.value;
});
}

else if (osname === 'android') {
	
	$.creditCardWnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.creditCardWnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/creditcardbarbkg.png');
			actionBar.setIcon('/aimages/backbtn.png');
			actionBar.onHomeIconItemSelected = function() {

				$.creditCardWnd.close();
			};
		}
	});
	

$.btnChkBox.addEventListener('click',function(e){
	if(e.source.backgroundImage == '/aimages/squarechkboxbkg.png') {
		e.source.backgroundImage = '/aimages/squarecheckedbkg.png';
	}else {
		e.source.backgroundImage = '/aimages/squarechkboxbkg.png';
	}
});

$.btnVisa.addEventListener('click',function(e){
	$.btnVisa.backgroundColor = "blue";
	$.btnMaster.backgroundColor = "#fff";
	$.btnAmex.backgroundColor = "#fff";
});

$.btnMaster.addEventListener('click',function(e){
	$.btnVisa.backgroundColor = "#fff";
	$.btnMaster.backgroundColor = "blue";
	$.btnAmex.backgroundColor = "#fff";
});

$.btnAmex.addEventListener('click',function(e){
	$.btnVisa.backgroundColor = "#fff";
	$.btnMaster.backgroundColor = "#fff";
	$.btnAmex.backgroundColor = "blue";
});

var slide_in = Titanium.UI.createAnimation({
		duration : 300,
		bottom : 0
	});
	var slide_out = Titanium.UI.createAnimation({
		duration : 300,
		bottom : -251
	});



	//	$.datePickerView.add(picker);

	$.btnShowExpDate.addEventListener('click', function(e) {
		//$.datePickerView.animate(slide_in);
		$.datePicker.showDatePickerDialog({
			value : new Date(), // some date
			callback : function(e) {
				if (e.cancel) {
					Ti.API.info('user canceled dialog');
				} else {

					Ti.API.info('value is: ' + e.value);
					Ti.API.info('lets see what this object is' + JSON.stringify(e));
					selectedDate = e.value;
					var dateval = e.value;

					$.txtDate.value = formatDate(dateval);
				}
			}
		});

	});
}

function formatDate(dateString) {
	var current_date = new Date(dateString);
	
	var dateString = current_date.getDate() + "/" + current_date.getMonth() + "/" + current_date.getFullYear();

	return dateString;
}

// // Create done button for keyboard type number pad to hide it
// var donebutton = Ti.UI.createButton({title:'DONE', width:Ti.UI.FILL, height:Ti.UI.FILL, activefld:'{}'});
// $.txtcardnumber.keyboardToolbar = [donebutton];
// 
// $.txtcardnumber.addEventListener('focus',function(e){
// 	
// $.txtcardnumber.activefld = [$.txtcardnumber];
// });
// 
// donebutton.addEventListener('click',function(e){
// e.source.activefld.blur();
// });
