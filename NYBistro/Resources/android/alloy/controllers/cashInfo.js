function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cashInfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.cashInfoWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "cashInfoWnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.cashInfoWnd && $.addTopLevelView($.__views.cashInfoWnd);
    $.__views.__alloyId1 = Ti.UI.createScrollView({
        height: "100%",
        showHorizontalScrollIndicator: "false",
        showVerticalScrollIndicator: "true",
        id: "__alloyId1"
    });
    $.__views.cashInfoWnd.add($.__views.__alloyId1);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView",
        backgroundColor: "#ffffff",
        layout: "vertical",
        height: Ti.UI.SIZE
    });
    $.__views.__alloyId1.add($.__views.containerView);
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
    $.__views.totalView = Ti.UI.createView({
        id: "totalView",
        top: "10",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "453",
        height: "50",
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.totalView);
    $.__views.lblTotalText = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "12",
        left: "4",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblTotalText",
        width: "220",
        text: "Total:",
        textAlign: "left"
    });
    $.__views.totalView.add($.__views.lblTotalText);
    $.__views.lblTotalVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblTotalVal",
        top: "12",
        left: "150"
    });
    $.__views.totalView.add($.__views.lblTotalVal);
    $.__views.lblPaid = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblPaid",
        text: "Amount Paid:"
    });
    $.__views.containerView.add($.__views.lblPaid);
    $.__views.txtPaid = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "100",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtPaid",
        color: "black"
    });
    $.__views.containerView.add($.__views.txtPaid);
    $.__views.remainView = Ti.UI.createView({
        id: "remainView",
        top: "10",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "453",
        height: "50",
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.remainView);
    $.__views.lblRemainText = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        top: "12",
        left: "4",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblRemainText",
        width: "220",
        text: "Remaining:",
        textAlign: "left"
    });
    $.__views.remainView.add($.__views.lblRemainText);
    $.__views.lblRemainVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblRemainVal",
        top: "12",
        left: "150"
    });
    $.__views.remainView.add($.__views.lblRemainVal);
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
    var orderData = Alloy.Models.instance("Order");
    $.lblTotalVal.text = "$" + orderData.get("Total");
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backbtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.cashInfoWnd);
        });
        $.cashInfoWnd.setLeftNavButton(backButton);
        $.cashInfoWnd.setBarImage("/images/creditcardbarbkg.png");
    } else "android" === osname && $.cashInfoWnd.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.cashInfoWnd.getActivity().actionBar;
            actionBar.setTitle("");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/creditcardbarbkg.png");
            actionBar.setIcon("/aimages/backbtn.png");
            actionBar.onHomeIconItemSelected = function() {
                $.cashInfoWnd.close();
            };
        }
    });
    $.remainView.addEventListener("click", function() {
        $.lblRemainVal.text = "$" + ($.txtPaid.value - orderData.get("Total"));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;