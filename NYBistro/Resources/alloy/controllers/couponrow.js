function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "couponrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowView = Ti.UI.createTableViewRow({
        backgroundImage: "/aimages/profilebg.png",
        backgroundColor: "transparent",
        height: 110,
        width: 576,
        id: "rowView"
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.leftImage = Ti.UI.createImageView({
        height: 70,
        width: 160,
        top: 8,
        left: 5,
        id: "leftImage"
    });
    $.__views.rowView.add($.__views.leftImage);
    $.__views.primaryLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 25,
            fontWeight: "bold"
        },
        color: "#a4451c",
        top: 8,
        left: 170,
        height: Ti.UI.SIZE,
        id: "primaryLabel"
    });
    $.__views.rowView.add($.__views.primaryLabel);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "normal"
        },
        color: "#806754",
        top: 37,
        left: 171,
        height: Ti.UI.SIZE,
        id: "subtitle"
    });
    $.__views.rowView.add($.__views.subtitle);
    $.__views.rightImage = Ti.UI.createImageView({
        height: 21,
        width: 14,
        top: 20,
        right: 7,
        id: "rightImage"
    });
    $.__views.rowView.add($.__views.rightImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var osname = "android";
    $.primaryLabel.text = args.primaryLabel || "";
    $.subtitle.text = args.subTitle || "";
    $.leftImage.image = "iphone" === osname ? "/images/newcoupon.png" : "/aimages/newcoupon.png";
    Titanium.API.info(args.rownum);
    if ("iphone" === osname) {
        if (0 === Number(args.rownum)) $.rightImage.image = "images/arrowbrown.png"; else if (Number(args.rownum) % 2) {
            $.leftImage.image = "images/downloadedcoupon.png";
            $.rightImage.image = "images/arrowgreen.png";
        } else if (Number(args.rownum) % 3) {
            $.leftImage.image = "images/loyaltycoupons.png";
            $.rightImage.image = "images/arrowbrown.png";
        }
    } else if ("android" === osname) if (0 === Number(args.rownum)) $.rightImage.image = "/aimages/arrow2.png"; else if (Number(args.rownum) % 2) {
        $.leftImage.image = "/aimages/downloadcoupon.png";
        $.rightImage.image = "/aimages/arrowgreen.png";
    } else if (Number(args.rownum) % 3) {
        $.leftImage.image = "/aimages/loyaltycoupon.png";
        $.rightImage.image = "/aimages/arrow2.png";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;