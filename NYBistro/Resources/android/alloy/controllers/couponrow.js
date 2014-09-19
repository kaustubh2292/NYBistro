function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "couponrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowView = Ti.UI.createTableViewRow({
        backgroundImage: "/aimages/profilebg.png",
        backgroundColor: "transparent",
        height: 90,
        width: 576,
        id: "rowView"
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.leftImage = Ti.UI.createImageView({
        height: 60,
        width: 110,
        top: 15,
        left: 5,
        id: "leftImage",
        image: "undefined" != typeof $model.__transform["CouponImage"] ? $model.__transform["CouponImage"] : $model.get("CouponImage")
    });
    $.__views.rowView.add($.__views.leftImage);
    $.__views.primaryLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#a4451c",
        top: 8,
        left: 150,
        height: Ti.UI.SIZE,
        width: 10,
        id: "primaryLabel",
        text: "undefined" != typeof $model.__transform["CouponName"] ? $model.__transform["CouponName"] : $model.get("CouponName")
    });
    $.__views.rowView.add($.__views.primaryLabel);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "normal"
        },
        color: "#806754",
        top: 37,
        left: 122,
        height: Ti.UI.SIZE,
        width: 140,
        id: "subtitle",
        text: "undefined" != typeof $model.__transform["CouponDesc"] ? $model.__transform["CouponDesc"] : $model.get("CouponDesc")
    });
    $.__views.rowView.add($.__views.subtitle);
    $.__views.rightImage = Ti.UI.createImageView({
        height: 21,
        width: 14,
        top: 34,
        right: 7,
        id: "rightImage",
        image: "undefined" != typeof $model.__transform["ArrowImage"] ? $model.__transform["ArrowImage"] : $model.get("ArrowImage")
    });
    $.__views.rowView.add($.__views.rightImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;