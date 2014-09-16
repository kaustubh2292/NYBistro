function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "creditcardinfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.creditCardWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "creditCardWnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.creditCardWnd && $.addTopLevelView($.__views.creditCardWnd);
    $.__views.__alloyId36 = Ti.UI.createScrollView({
        height: "100%",
        showHorizontalScrollIndicator: "false",
        showVerticalScrollIndicator: "true",
        id: "__alloyId36"
    });
    $.__views.creditCardWnd.add($.__views.__alloyId36);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView",
        backgroundColor: "#ffffff",
        layout: "vertical",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId36.add($.__views.containerView);
    $.__views.lblFirstName = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblFirstName",
        text: "First Name:"
    });
    $.__views.containerView.add($.__views.lblFirstName);
    $.__views.txtfirstname = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "300",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtfirstname",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtfirstname);
    $.__views.lblLastName = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblLastName",
        text: "Last Name:"
    });
    $.__views.containerView.add($.__views.lblLastName);
    $.__views.txtlasttname = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "300",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtlasttname",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtlasttname);
    $.__views.lblcardtype = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblcardtype",
        text: "Card Type:"
    });
    $.__views.containerView.add($.__views.lblcardtype);
    $.__views.creditOptions = Ti.UI.createView({
        id: "creditOptions",
        top: "5",
        width: "453",
        height: "50",
        layout: "horizontal",
        borderRadius: "10",
        borderColor: "blue",
        borderWidth: "1"
    });
    $.__views.containerView.add($.__views.creditOptions);
    $.__views.btnVisa = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        left: 0,
        title: "Visa",
        color: "black",
        backgroundColor: "#fff",
        borderColor: "blue",
        borderWidth: 1,
        id: "btnVisa"
    });
    $.__views.creditOptions.add($.__views.btnVisa);
    $.__views.btnMaster = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        title: "Master",
        color: "black",
        backgroundColor: "#fff",
        borderColor: "blue",
        borderWidth: 1,
        id: "btnMaster"
    });
    $.__views.creditOptions.add($.__views.btnMaster);
    $.__views.btnAmex = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        title: "Amex",
        color: "black",
        backgroundColor: "#fff",
        borderColor: "blue",
        borderWidth: 1,
        id: "btnAmex"
    });
    $.__views.creditOptions.add($.__views.btnAmex);
    $.__views.lblccnumber = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblccnumber",
        text: "Card Number:"
    });
    $.__views.containerView.add($.__views.lblccnumber);
    $.__views.txtcardnumber = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "300",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtcardnumber",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtcardnumber);
    $.__views.expDateView = Ti.UI.createView({
        id: "expDateView",
        top: "8",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.expDateView);
    $.__views.lblexpiry = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblexpiry",
        text: "Expiry Date:"
    });
    $.__views.expDateView.add($.__views.lblexpiry);
    $.__views.btnShowExpDate = Ti.UI.createButton({
        id: "btnShowExpDate",
        left: "180",
        width: "21",
        height: "14",
        backgroundImage: "/aimages/downarraow.png"
    });
    $.__views.expDateView.add($.__views.btnShowExpDate);
    $.__views.pickerView = Ti.UI.createView({
        id: "pickerView",
        top: "8",
        height: "0.1",
        width: "300",
        borderWidth: "1",
        borderRadius: "5"
    });
    $.__views.containerView.add($.__views.pickerView);
    $.__views.pickerExpDate = Ti.UI.createPicker({
        id: "pickerExpDate",
        type: Ti.UI.PICKER_TYPE_DATE,
        selectionIndicator: "true"
    });
    $.__views.pickerView.add($.__views.pickerExpDate);
    $.__views.lblcvv = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblcvv",
        text: "CVV:"
    });
    $.__views.containerView.add($.__views.lblcvv);
    $.__views.txtcvv = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "100",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtcvv",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtcvv);
    $.__views.lblbillingaddr = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblbillingaddr",
        text: "Billing Address:"
    });
    $.__views.containerView.add($.__views.lblbillingaddr);
    $.__views.txtbillingaddr = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "300",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtbillingaddr",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtbillingaddr);
    $.__views.lblcity = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblcity",
        text: "City:"
    });
    $.__views.containerView.add($.__views.lblcity);
    $.__views.txtcity = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "300",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtcity",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtcity);
    $.__views.lblstate = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblstate",
        text: "State:"
    });
    $.__views.containerView.add($.__views.lblstate);
    $.__views.txtstate = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "300",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtstate",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtstate);
    $.__views.lblzip = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblzip",
        text: "Zip Code:"
    });
    $.__views.containerView.add($.__views.lblzip);
    $.__views.txtzip = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "300",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtzip",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtzip);
    $.__views.saveccInfo = Ti.UI.createView({
        id: "saveccInfo",
        top: "8",
        left: "8",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.saveccInfo);
    $.__views.btnChkBox = Ti.UI.createButton({
        id: "btnChkBox",
        backgroundImage: "/aimages/squarechkboxbkg.png",
        width: "19.5",
        height: "18.5"
    });
    $.__views.saveccInfo.add($.__views.btnChkBox);
    $.__views.lblsaveccinfo = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "0",
        left: "10",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblsaveccinfo",
        text: "Save For Future Use"
    });
    $.__views.saveccInfo.add($.__views.lblsaveccinfo);
    $.__views.btnSubmit = Ti.UI.createButton({
        id: "btnSubmit",
        backgroundImage: "/aimages/btnsubmitbkg.png",
        top: "10",
        width: "103",
        height: "36"
    });
    $.__views.containerView.add($.__views.btnSubmit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    console.log("pickerExpDate");
    var maxDate = new Date();
    $.pickerExpDate.minDate = new Date(2013, 1, 1);
    $.pickerExpDate.maxDate = maxDate;
    var chosenDate = $.pickerExpDate.value;
    $.pickerExpDate.setLocale("de");
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backbtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.creditCardWnd);
        });
        $.creditCardWnd.setLeftNavButton(backButton);
        $.creditCardWnd.setBarImage("/images/creditcardbarbkg.png");
        $.btnChkBox.addEventListener("click", function(e) {
            e.source.backgroundImage = "/images/squarechkboxbkg.png" == e.source.backgroundImage ? "/images/squarecheckedbkg.png" : "/images/squarechkboxbkg.png";
        });
        var slide_in = Titanium.UI.createAnimation({
            duration: 100,
            height: "50"
        });
        var slide_out = Titanium.UI.createAnimation({
            duration: 100,
            height: "0.1"
        });
        $.btnShowExpDate.addEventListener("click", function(e) {
            if ("/images/downarraow.png" == e.source.backgroundImage) {
                e.source.backgroundImage = "/images/uparraow.png";
                $.pickerView.animate(slide_in);
            } else if ("/images/uparraow.png" == e.source.backgroundImage) {
                e.source.backgroundImage = "/images/downarraow.png";
                $.pickerView.animate(slide_out);
            }
        });
    } else if ("android" === osname) {
        $.creditCardWnd.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.creditCardWnd.getActivity().actionBar;
                actionBar.setTitle("");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/creditcardbarbkg.png");
                actionBar.setIcon("/aimages/backbtn.png");
                actionBar.onHomeIconItemSelected = function() {
                    $.creditCardWnd.close();
                };
            }
        });
        $.btnChkBox.addEventListener("click", function(e) {
            e.source.backgroundImage = "/aimages/squarechkboxbkg.png" == e.source.backgroundImage ? "/aimages/squarecheckedbkg.png" : "/aimages/squarechkboxbkg.png";
        });
        $.pickerExpDate.addEventListener("change", function(e) {
            console.log("User selected date: " + e.value);
            chosenDate = e.value;
        });
        $.btnVisa.addEventListener("click", function() {
            $.btnVisa.backgroundColor = "blue";
            $.btnMaster.backgroundColor = "#fff";
            $.btnAmex.backgroundColor = "#fff";
        });
        $.btnMaster.addEventListener("click", function() {
            $.btnVisa.backgroundColor = "#fff";
            $.btnMaster.backgroundColor = "blue";
            $.btnAmex.backgroundColor = "#fff";
        });
        $.btnAmex.addEventListener("click", function() {
            $.btnVisa.backgroundColor = "#fff";
            $.btnMaster.backgroundColor = "#fff";
            $.btnAmex.backgroundColor = "blue";
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;