var osname = Ti.Platform.osname;
// Array to hold month names
var month_names = new Array();
month_names[month_names.length] = "Jan";
month_names[month_names.length] = "Feb";
month_names[month_names.length] = "March";
month_names[month_names.length] = "April";
month_names[month_names.length] = "May";
month_names[month_names.length] = "June";
month_names[month_names.length] = "July";
month_names[month_names.length] = "Aug";
month_names[month_names.length] = "Sept";
month_names[month_names.length] = "Oct";
month_names[month_names.length] = "Nov";
month_names[month_names.length] = "Dec";

var day_names = new Array();
day_names[day_names.length] = "Sunday";
day_names[day_names.length] = "Monday";
day_names[day_names.length] = "Tuesday";
day_names[day_names.length] = "Wednesday";
day_names[day_names.length] = "Thursday";
day_names[day_names.length] = "Friday";
day_names[day_names.length] = "Saturday";

//Set initial value to today’s date.
var dateValue = new Date();
var minDate = new Date();

minDate.setFullYear(1900);
minDate.setMonth(0);
minDate.setDate(1);

//maxDate cannot be greater than today’s date.
var maxDate = dateValue;

if (osname === 'iphone') {

	// Create custom back button
	var backButton = Ti.UI.createButton({
		height : 26,
		width : 65,
		backgroundImage : '/images/backtohomebtn.png'
	});

	var navWnd = Alloy.Globals.navWnd;

	// Set as left nav button for current window
	$.reservationWnd.setLeftNavButton(backButton);
	$.reservationWnd.setBarImage('/images/reservationbarbkg.png');

	// Set event handler to close current window on back button
	backButton.addEventListener('click', function() {
		navWnd.closeWindow($.reservationWnd);
	});

	$.datePicker.minDate = minDate;
	$.datePicker.maxDate = maxDate;
	$.datePicker.value = dateValue;

	var slide_in = Titanium.UI.createAnimation({
		duration : 300,
		bottom : 0
	});
	var slide_out = Titanium.UI.createAnimation({
		duration : 300,
		bottom : -251
	});

	$.btnUpdateDate.addEventListener('click', function(e) {
		$.datePickerView.animate(slide_in);
	});

	$.btnCancel.addEventListener('click', function(e) {
		$.datePickerView.animate(slide_out);
	});
	

		// Cancel button handler for time
		$.btnCancelTime.addEventListener('click', function(e) {
			$.timePickerView.animate(slide_out);
		});


	//UPDATE VALUE IF CHANGED
	/*
	$.datePicker.addEventListener('change', function(e) {
	$.txtDate.value = $.datePicker.value;
	});
	*/

	//UPDATE VALUE IF CHANGED
	$.datePicker.addEventListener('change', function(e) {
		$.txtDate.value = formatDate($.datePicker.value);
	});

	// Update time value if changed
	$.timePicker.addEventListener('change', function(e) {
		var curr_time = new Date($.timePicker.value);
		$.txtTime.value = curr_time.toLocaleTimeString();
	});

	$.btnDone.addEventListener('click', function(e) {
		$.txtDate.value = formatDate($.datePicker.value);
		$.datePickerView.animate(slide_out);
	}); 
	
	

	$.btnDoneTime.addEventListener('click', function(e) {
		var curr_time = new Date($.timePicker.value);
		$.txtTime.value = curr_time.toLocaleTimeString();
		$.timePickerView.animate(slide_out);
	}); 



} else if (osname === 'android') {

	$.reservationWnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {

			var actionBar = $.reservationWnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/reservationbarbkg.png');
			actionBar.setIcon('/aimages/arrowbutton.png');
			actionBar.onHomeIconItemSelected = function() {

				$.reservationWnd.close();
			};
		}
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

	$.btnUpdateDate.addEventListener('click', function(e) {
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

	$.btnUpdateTime.addEventListener('click', function(e) {

		//$.datePickerView.animate(slide_in);
		$.datePicker.showTimePickerDialog({
			callback : function(e) {
				if (e.cancel) {
					Ti.API.info('user canceled dialog');
				} else {

					/*

					Ti.API.info('lets see what this object is' + JSON.stringify(e));*/
					//$.txtTime.value = e.value;
					var timeString = e.value;
					$.txtTime.value = timeString.toLocaleTimeString();
					//Ti.API.info('Time is : ' + timeString.toLocaleTimeString());
				}
			}
		});

	});

}

function loginUser() {
	aUser = Alloy.createModel('User');
	aUser.login("nybistroadmin", "admin1234", options);
}

var options = {
	success : function(_m, _r) {
		Ti.API.info(' SUCCESS ' + JSON.stringify(_m));
		
		saveReservation(function(){
			
			if (osname === 'android') {
				
				var pushObject = require('SendNotification');
				var success;
				pushObject.PushNotification(function(success){
					Ti.API.info('Reservation sent to restaurant'+success);
				});
				
				
				
			}
			
			else{
				
			}
			
		});
	},
	error : function(_m, _e) {
		Ti.API.info(_e);
	}
};

// Click handler for saving reservation
$.btnReserve.addEventListener('click', function(e) {
	loginUser();
});

function saveReservation(callback) {
	// Create a reservation to save it
	var reservation = Alloy.createModel("Reservation", {
		"ReservationId" : 10,
		"NumberOfPeople" : Number($.lblQtyNum.text),
		"ReservationDate" : $.txtDate.value,
		"ReservationTime" : $.txtTime.value
	});

	// save model to ACS
	reservation.save();
	callback();

	//alert('Reservation sent to restaurant');
}

// Click handlers for add and subtract quantity
$.btnAdd.addEventListener('click', function() {
	$.lblQtyNum.text = Number($.lblQtyNum.text) + 1;
});

$.btnSub.addEventListener('click', function() {
	if (Number($.lblQtyNum.text) > 1) {
		$.lblQtyNum.text = Number($.lblQtyNum.text) - 1;
	}
});

function formatDate(dateString) {
	var current_date = new Date(dateString);

	var dateString = day_names[current_date.getDay()] + ", ";
	dateString = dateString + month_names[current_date.getMonth()] + "-";
	dateString = dateString + current_date.getDate() + "-" + current_date.getFullYear();

	return dateString;
}
