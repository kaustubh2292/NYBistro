function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categoryrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowView = Ti.UI.createTableViewRow({
        backgroundImage: "/aimages/profilebg.png",
        backgroundColor: "transparent",
        height: 95,
        width: 576,
        id: "rowView",
        SubCategories: "undefined" != typeof $model.__transform["SubCategories"] ? $model.__transform["SubCategories"] : $model.get("SubCategories")
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.leftImage = Ti.UI.createImageView({
        image: "/aimages/item1.png",
        height: 70,
        width: 70,
        top: 12,
        left: 8,
        id: "leftImage"
    });
    $.__views.rowView.add($.__views.leftImage);
    $.__views.primaryLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 20,
            fontWeight: "bold"
        },
        color: "#A4451C",
        top: 8,
        left: 90,
        height: Ti.UI.SIZE,
        id: "primaryLabel",
        text: "undefined" != typeof $model.__transform["Name"] ? $model.__transform["Name"] : $model.get("Name")
    });
    $.__views.rowView.add($.__views.primaryLabel);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 16,
            fontWeight: "normal"
        },
        color: "#806754",
        top: 8,
        left: 95,
        height: Ti.UI.SIZE,
        id: "subtitle"
    });
    $.__views.rowView.add($.__views.subtitle);
    $.__views.rightImage = Ti.UI.createImageView({
        image: "/aimages/arrow2.png",
        height: 25,
        width: 14,
        top: 35,
        right: 10,
        id: "rightImage"
    });
    $.__views.rowView.add($.__views.rightImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;