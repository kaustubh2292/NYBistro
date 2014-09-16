function Controller() {
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
        height: "370"
    });
    $.__views.foodImageView.add($.__views.foodBkg);
    $.__views.imgFood = Ti.UI.createImageView({
        id: "imgFood",
        image: "/aimages/detailsfoodimage.png",
        top: "5",
        width: "470",
        height: "340"
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
            fontSize: 20,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblDate",
        left: "40",
        text: "Date:"
    });
    $.__views.dateView.add($.__views.lblDate);
    $.__views.txtDate = Ti.UI.createTextField({
        width: "200",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        color: "black",
        id: "txtDate",
        left: "10"
    });
    $.__views.dateView.add($.__views.txtDate);
    $.__views.btnUpdateDate = Ti.UI.createButton({
        id: "btnUpdateDate",
        height: "48.5",
        width: "29",
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
            fontSize: 20,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblTime",
        left: "40",
        text: "Time:"
    });
    $.__views.timeView.add($.__views.lblTime);
    $.__views.txtTime = Ti.UI.createTextField({
        width: "200",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        color: "black",
        id: "txtTime",
        left: "10"
    });
    $.__views.timeView.add($.__views.txtTime);
    $.__views.btnUpdateTime = Ti.UI.createButton({
        id: "btnUpdateTime",
        height: "48.5",
        width: "29",
        backgroundImage: "/aimages/btndownarrowbkg.png"
    });
    $.__views.timeView.add($.__views.btnUpdateTime);
    $.__views.numberOfPeopleView = Ti.UI.createView({
        id: "numberOfPeopleView",
        top: "15",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.numberOfPeopleView);
    $.__views.lblNumberOfPeople = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 20,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblNumberOfPeople",
        text: "Number Of People:",
        left: "40"
    });
    $.__views.numberOfPeopleView.add($.__views.lblNumberOfPeople);
    $.__views.lblQtyNum = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        width: 51,
        height: 32,
        backgroundImage: "/aimages/qtybkg.png",
        color: "#806754",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "lblQtyNum",
        left: "15",
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
        height: "16",
        width: "29"
    });
    $.__views.btnView.add($.__views.btnAdd);
    $.__views.btnSub = Ti.UI.createButton({
        id: "btnSub",
        backgroundImage: "/aimages/qtysubtractionbkg.png",
        height: "16",
        width: "29"
    });
    $.__views.btnView.add($.__views.btnSub);
    $.__views.btnReserve = Ti.UI.createButton({
        id: "btnReserve",
        top: "15",
        height: "50",
        width: "120",
        backgroundImage: "/aimages/btnreservebkg.png"
    });
    $.__views.containerView.add($.__views.btnReserve);
    $.__views.datePickerView = Ti.UI.createView({
        id: "datePickerView",
        height: "251",
        width: "96%",
        bottom: "-251"
    });
    $.__views.reservationWnd.add($.__views.datePickerView);
    $.__views.datePicker = Ti.UI.createPicker({
        id: "datePicker"
    });
    $.__views.datePickerView.add($.__views.datePicker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
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
        var dateValue = new Date();
        var minDate = new Date();
        minDate.setFullYear(1900);
        minDate.setMonth(0);
        minDate.setDate(1);
        var maxDate = dateValue;
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
        $.datePicker.addEventListener("change", function() {
            $.txtDate.value = $.datePicker.value;
        });
        $.btnDone.addEventListener("click", function() {
            $.txtDate.value = $.datePicker.value;
            $.datePickerView.animate(slide_out);
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
        var dateValue = new Date();
        var minDate = new Date();
        minDate.setFullYear(1900);
        minDate.setMonth(0);
        minDate.setDate(1);
        var maxDate = dateValue;
        var slide_in = Titanium.UI.createAnimation({
            duration: 300,
            bottom: 0
        });
        var slide_out = Titanium.UI.createAnimation({
            duration: 300,
            bottom: -251
        });
        Ti.UI.createPicker({});
        $.btnUpdateDate.addEventListener("click", function() {
            $.datePicker.showDatePickerDialog({
                value: new Date(),
                callback: function(e) {
                    if (e.cancel) Ti.API.info("user canceled dialog"); else {
                        Ti.API.info("value is: " + e.value);
                        Ti.API.info("lets see what this object is" + JSON.stringify(e));
                        selectedDate = e.value;
                        e.value;
                        Ti.API.info("date ==" + dateValue.toDateString());
                    }
                }
            });
        });
        $.btnUpdateTime.addEventListener("click", function() {
            $.datePicker.showTimePickerDialog({
                callback: function(e) {
                    if (e.cancel) Ti.API.info("user canceled dialog"); else {
                        Ti.API.info("value is: " + e.value);
                        Ti.API.info("lets see what this object is" + JSON.stringify(e));
                    }
                }
            });
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;