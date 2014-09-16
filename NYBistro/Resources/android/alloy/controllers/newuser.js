function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newuser";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.newUserWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "newUserWnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.newUserWnd && $.addTopLevelView($.__views.newUserWnd);
    $.__views.__alloyId69 = Ti.UI.createScrollView({
        height: "100%",
        showHorizontalScrollIndicator: "false",
        showVerticalScrollIndicator: "true",
        id: "__alloyId69"
    });
    $.__views.newUserWnd.add($.__views.__alloyId69);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView",
        backgroundColor: "#ffffff",
        top: "5",
        height: Ti.UI.SIZE,
        layout: "vertical"
    });
    $.__views.__alloyId69.add($.__views.containerView);
    $.__views.lblFirstName = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
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
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtfirstname",
        _tag: "0"
    });
    $.__views.containerView.add($.__views.txtfirstname);
    $.__views.lblLastName = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
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
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtlasttname",
        _tag: "1"
    });
    $.__views.containerView.add($.__views.txtlasttname);
    $.__views.lblEmail = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblEmail",
        text: "Email Address:"
    });
    $.__views.containerView.add($.__views.lblEmail);
    $.__views.txtEmailAddress = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtEmailAddress",
        _tag: "0"
    });
    $.__views.containerView.add($.__views.txtEmailAddress);
    $.__views.lblPassword = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblPassword",
        text: "Password:"
    });
    $.__views.containerView.add($.__views.lblPassword);
    $.__views.txtPassword = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtPassword",
        _tag: "1"
    });
    $.__views.containerView.add($.__views.txtPassword);
    $.__views.lblPhoneNumber = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblPhoneNumber",
        text: "Phone Number:"
    });
    $.__views.containerView.add($.__views.lblPhoneNumber);
    $.__views.phoneview = Ti.UI.createView({
        id: "phoneview",
        top: "4",
        height: Ti.UI.SIZE,
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.phoneview);
    $.__views.txtAreaCode = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "90",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtAreaCode"
    });
    $.__views.phoneview.add($.__views.txtAreaCode);
    $.__views.seperator1 = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 30,
            fontWeight: "bold"
        },
        color: "#a4451c",
        id: "seperator1",
        left: "5",
        text: "-"
    });
    $.__views.phoneview.add($.__views.seperator1);
    $.__views.txtFirstThreeDigits = Ti.UI.createTextField({
        top: "8",
        left: "5",
        width: "90",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtFirstThreeDigits"
    });
    $.__views.phoneview.add($.__views.txtFirstThreeDigits);
    $.__views.seperator2 = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 30,
            fontWeight: "bold"
        },
        color: "#a4451c",
        id: "seperator2",
        left: "5",
        text: "-"
    });
    $.__views.phoneview.add($.__views.seperator2);
    $.__views.txtFirstThreeDigits = Ti.UI.createTextField({
        top: "8",
        left: "5",
        width: "90",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtFirstThreeDigits"
    });
    $.__views.phoneview.add($.__views.txtFirstThreeDigits);
    $.__views.lblAddress = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblAddress",
        text: "Address:"
    });
    $.__views.containerView.add($.__views.lblAddress);
    $.__views.txtAddress = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtAddress",
        _tag: "0"
    });
    $.__views.containerView.add($.__views.txtAddress);
    $.__views.lblCity = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblCity",
        text: "City:"
    });
    $.__views.containerView.add($.__views.lblCity);
    $.__views.txtCity = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtCity",
        _tag: "1"
    });
    $.__views.containerView.add($.__views.txtCity);
    $.__views.lblState = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblState",
        text: "State:"
    });
    $.__views.containerView.add($.__views.lblState);
    $.__views.lblZip = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblZip",
        text: "Zip Code:"
    });
    $.__views.containerView.add($.__views.lblZip);
    $.__views.txtZip = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtZip",
        _tag: "1"
    });
    $.__views.containerView.add($.__views.txtZip);
    $.__views.termsAndConditionsView = Ti.UI.createView({
        id: "termsAndConditionsView",
        left: "8",
        top: "10",
        height: Ti.UI.SIZE,
        backgroundColor: "transparent",
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.termsAndConditionsView);
    $.__views.termsAndConditions = Ti.UI.createImageView({
        id: "termsAndConditions",
        width: "160",
        height: "45",
        top: "8",
        image: "/aimages/termsandconditions.png"
    });
    $.__views.termsAndConditionsView.add($.__views.termsAndConditions);
    $.__views.btnChkBox = Ti.UI.createButton({
        id: "btnChkBox",
        left: "40",
        width: "21.5",
        height: "20.5",
        top: "15",
        backgroundImage: "/aimages/squarechkboxbkg.png"
    });
    $.__views.termsAndConditionsView.add($.__views.btnChkBox);
    $.__views.lblAccept = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblAccept",
        text: "Accept"
    });
    $.__views.termsAndConditionsView.add($.__views.lblAccept);
    $.__views.btnSubmit = Ti.UI.createButton({
        id: "btnSubmit",
        backgroundImage: "/aimages/btnsubmitbkg.png",
        top: "10",
        bottom: "10",
        width: "120",
        height: "50"
    });
    $.__views.containerView.add($.__views.btnSubmit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backtohomebtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        $.newUserWnd.setLeftNavButton(backButton);
        $.newUserWnd.setBarImage("/images/newuserbarbkg.png");
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.newUserWnd);
        });
        $.btnChkBox.addEventListener("click", function(e) {
            e.source.backgroundImage = "/images/squarechkboxbkg.png" == e.source.backgroundImage ? "/images/squarecheckedbkg.png" : "/images/squarechkboxbkg.png";
        });
    }
    $.newUserWnd.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.newUserWnd.getActivity().actionBar;
            actionBar.setTitle("");
            actionBar.setBackgroundImage("/aimages/newuserbarbkg.png");
            actionBar.setIcon("/aimages/arrowbutton.png");
            actionBar.onHomeIconItemSelected = function() {
                $.newUserWnd.close();
            };
        }
    });
    $.btnChkBox.addEventListener("click", function(e) {
        e.source.backgroundImage = "/aimages/squarechkboxbkg.png" == e.source.backgroundImage ? "/aimages/squarecheckedbkg.png" : "/aimages/squarechkboxbkg.png";
    });
    $.termsAndConditions.addEventListener("click", function() {
        alert("Terms and Conditions clickd");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;