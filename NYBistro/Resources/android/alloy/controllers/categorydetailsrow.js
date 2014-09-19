function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categorydetailsrow";
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
        menuitemid: "undefined" != typeof $model.__transform["MenuItemId"] ? $model.__transform["MenuItemId"] : $model.get("MenuItemId")
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.leftImage = Ti.UI.createImageView({
        image: "/aimages/item1.png",
        height: 70,
        width: 70,
        top: 12,
        left: 5,
        id: "leftImage"
    });
    $.__views.rowView.add($.__views.leftImage);
    $.__views.primaryLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "#A4451C",
        top: 8,
        left: 80,
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
        top: 35,
        left: 85,
        height: Ti.UI.SIZE,
        width: 150,
        id: "subtitle",
        text: "undefined" != typeof $model.__transform["Description"] ? $model.__transform["Description"] : $model.get("Description")
    });
    $.__views.rowView.add($.__views.subtitle);
    $.__views.btnPrice = Ti.UI.createButton({
        backgroundImage: "/aimages/pricebutton.png",
        height: 30,
        width: 60,
        top: 32,
        right: 30,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "white",
        id: "btnPrice",
        title: "undefined" != typeof $model.__transform["Price"] ? $model.__transform["Price"] : $model.get("Price")
    });
    $.__views.rowView.add($.__views.btnPrice);
    $.__views.rightImage = Ti.UI.createImageView({
        image: "/aimages/arrow2.png",
        height: 25,
        width: 12,
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