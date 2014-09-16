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
        height: 110,
        width: 576,
        id: "rowView",
        menuitemid: "undefined" != typeof $model.__transform["MenuItemId"] ? $model.__transform["MenuItemId"] : $model.get("MenuItemId")
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.leftImage = Ti.UI.createImageView({
        image: "/aimages/item1.png",
        height: 95,
        width: 95,
        top: 8,
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
        left: 108,
        height: Ti.UI.SIZE,
        id: "primaryLabel",
        text: "undefined" != typeof $model.__transform["Name"] ? $model.__transform["Name"] : $model.get("Name")
    });
    $.__views.rowView.add($.__views.primaryLabel);
    $.__views.subtitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "normal"
        },
        color: "#806754",
        top: 42,
        left: 110,
        height: Ti.UI.SIZE,
        width: 200,
        id: "subtitle",
        text: "undefined" != typeof $model.__transform["Description"] ? $model.__transform["Description"] : $model.get("Description")
    });
    $.__views.rowView.add($.__views.subtitle);
    $.__views.btnPrice = Ti.UI.createButton({
        backgroundImage: "/aimages/pricebutton.png",
        height: 46,
        width: 100,
        top: 26,
        right: 35,
        font: {
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "white",
        id: "btnPrice",
        title: "undefined" != typeof $model.__transform["Price"] ? $model.__transform["Price"] : $model.get("Price")
    });
    $.__views.rowView.add($.__views.btnPrice);
    $.__views.rightImage = Ti.UI.createImageView({
        image: "/aimages/arrow2.png",
        height: 33,
        width: 14,
        top: 37,
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