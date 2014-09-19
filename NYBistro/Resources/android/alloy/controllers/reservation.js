function Controller() {
    function loginUser() {
        aUser = Alloy.createModel("User");
        aUser.login("nybistroadmin", "admin1234", options);
    }
    function saveReservation(callback) {
        var reservation = Alloy.createModel("Reservation", {
            ReservationId: 10,
            NumberOfPeople: Number($.lblQtyNum.text),
            ReservationDate: $.txtDate.value,
            ReservationTime: $.txtTime.value
        });
        reservation.save();
        callback();
    }
    function formatDate(dateString) {
        var current_date = new Date(dateString);
        var dateString = day_names[current_date.getDay()] + ", ";
        dateString = dateString + month_names[current_date.getMonth()] + "-";
        dateString = dateString + current_date.getDate() + "-" + current_date.getFullYear();
        return dateString;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "reservation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.reservationWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "reservationWnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.reservationWnd && $.addTopLevelView($.__views.reservationWnd);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView",
        backgroundColor: "#ffffff",
        height: Ti.UI.SIZE,
        top: "0",
        width: "100%",
        layout: "vertical"
    });
    $.__views.reservationWnd.add($.__views.containerView);
    $.__views.foodImageView = Ti.UI.createView({
        id: "foodImageView",
        height: Ti.UI.SIZE,
        top: "5"
    });
    $.__views.containerView.add($.__views.foodImageView);
    $.__views.foodBkg = Ti.UI.createImageView({
        id: "foodBkg",
        image: "/aimages/detailfoodimgbkg.png",
        top: "0",
        width: "580",
        height: "230"
    });
    $.__views.foodImageView.add($.__views.foodBkg);
    $.__views.imgFood = Ti.UI.createImageView({
        id: "imgFood",
        image: "/aimages/detailsfoodimage.png",
        top: "5",
        width: "350",
        height: "210"
    });
    $.__views.foodImageView.add($.__views.imgFood);
    $.__views.dateView = Ti.UI.createView({
        id: "dateView",
        top: "15",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.dateView);
    $.__views.lblDate = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblDate",
        left: "10",
        text: "Date:"
    });
    $.__views.dateView.add($.__views.lblDate);
    $.__views.txtDate = Ti.UI.createTextField({
        width: "200",
        height: "40",
        backgroundColor: "#e9e7db",
        borderRadius: "2",
        color: "black",
        id: "txtDate",
        left: "10"
    });
    $.__views.dateView.add($.__views.txtDate);
    $.__views.btnUpdateDate = Ti.UI.createButton({
        id: "btnUpdateDate",
        height: "40",
        width: "18",
        backgroundImage: "/aimages/btndownarrowbkg.png"
    });
    $.__views.dateView.add($.__views.btnUpdateDate);
    $.__views.timeView = Ti.UI.createView({
        id: "timeView",
        top: "15",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.timeView);
    $.__views.lblTime = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblTime",
        left: "10",
        text: "Time:"
    });
    $.__views.timeView.add($.__views.lblTime);
    $.__views.txtTime = Ti.UI.createTextField({
        width: "200",
        height: "40",
        backgroundColor: "#e9e7db",
        borderRadius: "2",
        color: "black",
        id: "txtTime",
        left: "8"
    });
    $.__views.timeView.add($.__views.txtTime);
    $.__views.btnUpdateTime = Ti.UI.createButton({
        id: "btnUpdateTime",
        height: "40",
        width: "18",
        backgroundImage: "/aimages/btndownarrowbkg.png"
    });
    $.__views.timeView.add($.__views.btnUpdateTime);
    $.__views.numberOfPeopleView = Ti.UI.createView({
        id: "numberOfPeopleView",
        top: "10",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.numberOfPeopleView);
    $.__views.lblNumberOfPeople = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblNumberOfPeople",
        text: "Number Of People:",
        left: "10"
    });
    $.__views.numberOfPeopleView.add($.__views.lblNumberOfPeople);
    $.__views.lblQtyNum = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 12,
            fontWeight: "bold"
        },
        width: 30,
        height: 40,
        backgroundImage: "/aimages/qtybkg.png",
        color: "#806754",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "lblQtyNum",
        left: "10",
        text: "1"
    });
    $.__views.numberOfPeopleView.add($.__views.lblQtyNum);
    $.__views.btnView = Ti.UI.createView({
        id: "btnView",
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    });
    $.__views.numberOfPeopleView.add($.__views.btnView);
    $.__views.btnAdd = Ti.UI.createButton({
        id: "btnAdd",
        backgroundImage: "/aimages/qtyadditionbkg.png",
        height: "20",
        width: "25"
    });
    $.__views.btnView.add($.__views.btnAdd);
    $.__views.btnSub = Ti.UI.createButton({
        id: "btnSub",
        backgroundImage: "/aimages/qtysubtractionbkg.png",
        height: "20",
        width: "25"
    });
    $.__views.btnView.add($.__views.btnSub);
    $.__views.btnReserve = Ti.UI.createButton({
        id: "btnReserve",
        top: "20",
        height: "35",
        width: "75",
        backgroundImage: "/aimages/btnreservebkg.png"
    });
    $.__views.containerView.add($.__views.btnReserve);
    $.__views.datePickerView = Ti.UI.createView({
        id: "datePickerView",
        height: "150",
        width: "90%",
        bottom: "-150"
    });
    $.__views.reservationWnd.add($.__views.datePickerView);
    $.__views.datePicker = Ti.UI.createPicker({
        id: "datePicker"
    });
    $.__views.datePickerView.add($.__views.datePicker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
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
    var dateValue = new Date();
    var minDate = new Date();
    minDate.setFullYear(1900);
    minDate.setMonth(0);
    minDate.setDate(1);
    var maxDate = dateValue;
    if ("iphone" === osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backtohomebtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        $.reservationWnd.setLeftNavButton(backButton);
        $.reservationWnd.setBarImage("/images/reservationbarbkg.png");
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.reservationWnd);
        });
        $.datePicker.minDate = minDate;
        $.datePicker.maxDate = maxDate;
        $.datePicker.value = dateValue;
        var slide_in = Titanium.UI.createAnimation({
            duration: 300,
            bottom: 0
        });
        var slide_out = Titanium.UI.createAnimation({
            duration: 300,
            bottom: -251
        });
        $.btnUpdateDate.addEventListener("click", function() {
            $.datePickerView.animate(slide_in);
        });
        $.btnCancel.addEventListener("click", function() {
            $.datePickerView.animate(slide_out);
        });
        $.btnCancelTime.addEventListener("click", function() {
            $.timePickerView.animate(slide_out);
        });
        $.datePicker.addEventListener("change", function() {
            $.txtDate.value = formatDate($.datePicker.value);
        });
        $.timePicker.addEventListener("change", function() {
            var curr_time = new Date($.timePicker.value);
            $.txtTime.value = curr_time.toLocaleTimeString();
        });
        $.btnDone.addEventListener("click", function() {
            $.txtDate.value = formatDate($.datePicker.value);
            $.datePickerView.animate(slide_out);
        });
        $.btnDoneTime.addEventListener("click", function() {
            var curr_time = new Date($.timePicker.value);
            $.txtTime.value = curr_time.toLocaleTimeString();
            $.timePickerView.animate(slide_out);
        });
    } else if ("android" === osname) {
        $.reservationWnd.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.reservationWnd.getActivity().actionBar;
                actionBar.setTitle("");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/reservationbarbkg.png");
                actionBar.setIcon("/aimages/arrowbutton.png");
                actionBar.onHomeIconItemSelected = function() {
                    $.reservationWnd.close();
                };
            }
        });
        var slide_in = Titanium.UI.createAnimation({
            duration: 300,
            bottom: 0
        });
        var slide_out = Titanium.UI.createAnimation({
            duration: 300,
            bottom: -251
        });
        $.btnUpdateDate.addEventListener("click", function() {
            $.datePicker.showDatePickerDialog({
                value: new Date(),
                callback: function(e) {
                    if (e.cancel) Ti.API.info("user canceled dialog"); else {
                        Ti.API.info("value is: " + e.value);
                        Ti.API.info("lets see what this object is" + JSON.stringify(e));
                        selectedDate = e.value;
                        var dateval = e.value;
                        $.txtDate.value = formatDate(dateval);
                    }
                }
            });
        });
        $.btnUpdateTime.addEventListener("click", function() {
            $.datePicker.showTimePickerDialog({
                callback: function(e) {
                    if (e.cancel) Ti.API.info("user canceled dialog"); else {
                        var timeString = e.value;
                        $.txtTime.value = timeString.toLocaleTimeString();
                    }
                }
            });
        });
    }
    var options = {
        success: function(_m) {
            Ti.API.info(" SUCCESS " + JSON.stringify(_m));
            saveReservation(function() {
                if ("android" === osname) {
                    var pushObject = require("SendNotification");
                    pushObject.PushNotification(function(success) {
                        Ti.API.info("Reservation sent to restaurant" + success);
                    });
                }
            });
        },
        error: function(_m, _e) {
            Ti.API.info(_e);
        }
    };
    $.btnReserve.addEventListener("click", function() {
        loginUser();
    });
    $.btnAdd.addEventListener("click", function() {
        $.lblQtyNum.text = Number($.lblQtyNum.text) + 1;
    });
    $.btnSub.addEventListener("click", function() {
        Number($.lblQtyNum.text) > 1 && ($.lblQtyNum.text = Number($.lblQtyNum.text) - 1);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;