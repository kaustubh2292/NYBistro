function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mycouponrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowView = Ti.UI.createTableViewRow({
        backgroundImage: "/aimages/profilebg.png",
        height: 110,
        width: 576,
        id: "rowView",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.leftImage = Ti.UI.createImageView({
        image: "/aimages/item1.png",
        height: 95,
        width: 95,
        top: 10,
        left: 8,
        id: "leftImage"
    });
    $.__views.rowView.add($.__views.leftImage);
    $.__views.primaryLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 25,
            fontWeight: "bold"
        },
        color: "#A4451C",
        top: 10,
        left: 108,
        height: Ti.UI.SIZE,
        id: "primaryLabel",
        text: "undefined" != typeof $model.__transform["CouponName"] ? $model.__transform["CouponName"] : $model.get("CouponName")
    });
    $.__views.rowView.add($.__views.primaryLabel);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 21.5,
            fontWeight: "normal"
        },
        color: "#806754",
        top: 42,
        left: 110,
        height: Ti.UI.SIZE,
        id: "subtitle",
        text: "undefined" != typeof $model.__transform["CouponDesc"] ? $model.__transform["CouponDesc"] : $model.get("CouponDesc")
    });
    $.__views.rowView.add($.__views.subtitle);
    $.__views.lblExpiry = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18.5,
            fontWeight: "bold"
        },
        color: "#806754",
        top: 75,
        left: 110,
        height: Ti.UI.SIZE,
        id: "lblExpiry",
        text: "undefined" != typeof $model.__transform["CouponExp"] ? $model.__transform["CouponExp"] : $model.get("CouponExp")
    });
    $.__views.rowView.add($.__views.lblExpiry);
    $.__views.lblloyaltycoupon = Ti.UI.createLabel({
        height: 38,
        width: 80,
        top: 10,
        right: 110,
        id: "lblloyaltycoupon",
        backgroundImage: "undefined" != typeof $model.__transform["CouponImage"] ? $model.__transform["CouponImage"] : $model.get("CouponImage")
    });
    $.__views.rowView.add($.__views.lblloyaltycoupon);
    $.__views.rightImage = Ti.UI.createImageView({
        image: "/aimages/arrow1.png",
        height: 33,
        width: 14,
        top: 37,
        right: 10,
        id: "rightImage"
    });
    $.__views.rowView.add($.__views.rightImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.primaryLabel.text = args.primaryLabel || "";
    $.subtitle.text = args.subTitle || "";
    var osname = "android";
    "iphone" === osname ? Number(args.rownum) % 2 && ($.lblloyaltycoupon.backgroundImage = "images/loyaltycoupontag.png") : "android" === osname && Number(args.rownum) % 2 && ($.lblloyaltycoupon.backgroundImage = "/aimages/loyaltycoupontag.png");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;