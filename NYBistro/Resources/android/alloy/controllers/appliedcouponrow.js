function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "appliedcouponrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowView = Ti.UI.createTableViewRow({
        backgroundImage: "/images/categorybkg.png",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        id: "rowView",
        layout: "horizontal"
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.primaryLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        top: 2,
        height: Ti.UI.SIZE,
        id: "primaryLabel",
        left: "10"
    });
    $.__views.rowView.add($.__views.primaryLabel);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        top: 2,
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "subtitle",
        left: "95"
    });
    $.__views.rowView.add($.__views.subtitle);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.primaryLabel.text = args.couponName || "";
    $.subtitle.text = "Discount" === args.couponType ? args.discountVal + "%" || "" : "$" + args.discountVal || "";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;