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
        height: "100%",
        width: "100%"
    });
    $.__views.winCouponDetails.add($.__views.containerView);
    $.__views.foodBkg = Ti.UI.createImageView({
        id: "foodBkg",
        image: "/aimages/detailfoodimgbkg.png",
        width: "550",
        height: "230",
        top: "0"
    });
    $.__views.containerView.add($.__views.foodBkg);
    $.__views.imgFood = Ti.UI.createImageView({
        id: "imgFood",
        image: "/aimages/detailsfoodimage.png",
        width: "330",
        height: "210",
        top: "10"
    });
    $.__views.containerView.add($.__views.imgFood);
    $.__views.couponTxtBkg = Ti.UI.createView({
        id: "couponTxtBkg",
        backgroundImage: "/aimages/profilebg.png",
        height: "80",
        width: "320",
        top: "240",
        borderRadius: "5"
    });
    $.__views.containerView.add($.__views.couponTxtBkg);
    $.__views.lblFoodName = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 20,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblFoodName",
        top: "10",
        left: "30"
    });
    $.__views.couponTxtBkg.add($.__views.lblFoodName);
    $.__views.lblCoupondesc = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 14,
            fontWeight: "normal"
        },
        color: "#806754",
        height: Ti.UI.SIZE,
        id: "lblCoupondesc",
        top: "40",
        left: "30"
    });
    $.__views.couponTxtBkg.add($.__views.lblCoupondesc);
    $.__views.btnAction = Ti.UI.createButton({
        id: "btnAction",
        width: "100",
        height: "40",
        backgroundImage: "/aimages/redeembtnbkg.png",
        top: "360",
        left: "115",
        bottom: "2"
    });
    $.__views.containerView.add($.__views.btnAction);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    var args = arguments[0] || {};
    var coupon = args.coupondata;
    $.lblFoodName.text = coupon.get("CouponName");
    $.lblCoupondesc.text = coupon.get("CouponDesc");
    status = coupon.get("Status");
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
        "new" === status ? $.btnAction.backgroundImage = "images/downloadcoupon.png" : "downloaded" === status && ($.btnAction.backgroundImage = "images/redeemcoupon.png");
    } else if ("android" === osname) {
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
        "new" === status ? $.btnAction.backgroundImage = "/aimages/downcouponbtnbkg.png" : "downloaded" === status && ($.btnAction.backgroundImage = "/aimages/redeembtnbkg.png");
    }
    $.btnAction.addEventListener("click", function() {
        if ("new" === status) {
            localCoupon = Alloy.createModel("CouponLocal");
            localCoupon.set("CouponId", coupon.get("CouponId"));
            localCoupon.set("ItemId", JSON.stringify(coupon.get("ItemId")));
            localCoupon.set("CouponName", coupon.get("CouponName"));
            localCoupon.set("CouponDesc", coupon.get("CouponDesc"));
            localCoupon.set("CouponExp", coupon.get("CouponExp"));
            localCoupon.set("CouponType", coupon.get("CouponType"));
            localCoupon.set("CouponVal", coupon.get("CouponVal"));
            localCoupon.set("UsageCount", coupon.get("UsageCount"));
            localCoupon.set("CouponImage", coupon.get("CouponImage"));
            localCoupon.set("ArrowImage", coupon.get("ArrowImage"));
            localCoupon.set("Status", "downloaded");
            localCoupon.save();
            Ti.App.fireEvent("coupondownloaded");
            alert("Coupon is successfully downloaded to your device.");
        } else "downloaded" === status && ("Loyalty" === coupon.get("CouponType") || Ti.App.fireEvent("applycoupon", {
            coupondata: coupon.toJSON()
        }));
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;