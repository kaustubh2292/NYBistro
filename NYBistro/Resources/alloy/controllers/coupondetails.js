function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "coupondetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winCouponDetails = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winCouponDetails",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.winCouponDetails && $.addTopLevelView($.__views.winCouponDetails);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView",
        backgroundColor: "white",
        height: "100%",
        width: "100%"
    });
    $.__views.winCouponDetails.add($.__views.containerView);
    $.__views.foodBkg = Ti.UI.createImageView({
        id: "foodBkg",
        image: "/aimages/detailfoodimgbkg.png",
        width: "550",
        height: "370",
        top: "0"
    });
    $.__views.containerView.add($.__views.foodBkg);
    $.__views.imgFood = Ti.UI.createImageView({
        id: "imgFood",
        image: "/aimages/detailsfoodimage.png",
        width: "470",
        height: "340",
        top: "10"
    });
    $.__views.containerView.add($.__views.imgFood);
    $.__views.lblFoodName = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 50,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblFoodName",
        text: "BUY 1 GET 1 FREE",
        top: "371",
        left: "40"
    });
    $.__views.containerView.add($.__views.lblFoodName);
    $.__views.couponTxtBkg = Ti.UI.createImageView({
        id: "couponTxtBkg",
        image: "/aimages/profilebg.png",
        height: "200",
        width: "470",
        top: "430",
        borderRadius: "5"
    });
    $.__views.containerView.add($.__views.couponTxtBkg);
    $.__views.btnAction = Ti.UI.createButton({
        id: "btnAction",
        width: "200",
        height: "50",
        backgroundImage: "/aimages/redeembtnbkg.png",
        top: "640",
        left: "140"
    });
    $.__views.containerView.add($.__views.btnAction);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    var args = arguments[0] || {};
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backbtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.winCouponDetails);
        });
        $.winCouponDetails.setLeftNavButton(backButton);
        $.winCouponDetails.setBarImage("/images/coupondetailsbarbkg.png");
        "download" === args.action && ($.btnAction.backgroundImage = "images/downloadcoupon.png");
    } else if ("android" === osname) {
        "download" === args.action && ($.btnAction.backgroundImage = "/aimages/downcouponbtnbkg.png");
        $.winCouponDetails.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.winCouponDetails.getActivity().actionBar;
                actionBar.setTitle("");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/coupondetailsbarbkg.png");
                actionBar.setIcon("/aimages/backbtn.png");
                actionBar.onHomeIconItemSelected = function() {
                    $.winCouponDetails.close();
                };
            }
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;