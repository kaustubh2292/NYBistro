function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subcategoryrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowView = Ti.UI.createTableViewRow({
        backgroundImage: "/images/categorybkg.png",
        backgroundColor: "transparent",
        height: 66,
        width: Ti.UI.FILL,
        id: "rowView",
        subcatid: "undefined" != typeof $model.__transform["SubCatId"] ? $model.__transform["SubCatId"] : $model.get("SubCatId")
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.leftImage = Ti.UI.createImageView({
        image: "/images/foodimg.png",
        height: 47,
        width: 47,
        top: 8,
        left: 8,
        id: "leftImage"
    });
    $.__views.rowView.add($.__views.leftImage);
    $.__views.primaryLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        top: 20,
        left: 60,
        height: Ti.UI.SIZE,
        id: "primaryLabel",
        text: "undefined" != typeof $model.__transform["Name"] ? $model.__transform["Name"] : $model.get("Name")
    });
    $.__views.rowView.add($.__views.primaryLabel);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 12,
            fontWeight: "normal"
        },
        color: "#806754",
        top: 32,
        left: 62,
        height: Ti.UI.SIZE,
        id: "subtitle"
    });
    $.__views.rowView.add($.__views.subtitle);
    $.__views.rightImage = Ti.UI.createImageView({
        image: "/images/arrowbrown.png",
        height: 21,
        width: 14,
        top: 22,
        right: 10,
        id: "rightImage"
    });
    $.__views.rowView.add($.__views.rightImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;