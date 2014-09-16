function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "shoppingcartrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowView = Ti.UI.createTableViewRow({
        id: "rowView"
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.rowContainer = Ti.UI.createView({
        backgroundColor: "transparent",
        top: 5,
        bottom: 2,
        height: 120,
        width: "95%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "Gray",
        id: "rowContainer"
    });
    $.__views.rowView.add($.__views.rowContainer);
    $.__views.leftImage = Ti.UI.createImageView({
        image: "/aimages/item1.png",
        height: 95,
        width: 95,
        top: 8,
        left: 8,
        id: "leftImage"
    });
    $.__views.rowContainer.add($.__views.leftImage);
    $.__views.primaryLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 25,
            fontWeight: "bold"
        },
        color: "#a4451c",
        top: 5,
        left: 110,
        height: Ti.UI.SIZE,
        id: "primaryLabel",
        text: "undefined" != typeof $model.__transform["ItemName"] ? $model.__transform["ItemName"] : $model.get("ItemName")
    });
    $.__views.rowContainer.add($.__views.primaryLabel);
    $.__views.price = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "normal"
        },
        color: "#806754",
        left: 110,
        height: Ti.UI.SIZE,
        id: "price",
        top: "32",
        text: "undefined" != typeof $model.__transform["ItemPrice"] ? $model.__transform["ItemPrice"] : $model.get("ItemPrice")
    });
    $.__views.rowContainer.add($.__views.price);
    $.__views.quantity = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "normal"
        },
        color: "#806754",
        left: 110,
        height: Ti.UI.SIZE,
        id: "quantity",
        top: "55"
    });
    $.__views.rowContainer.add($.__views.quantity);
    $.__views.btnChangeQty = Ti.UI.createButton({
        font: {
            fontFamily: "Arial",
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#ebbca3",
        backgroundImage: "/aimages/buttonbg.png",
        id: "btnChangeQty",
        top: "80",
        left: "110",
        width: "60",
        height: "35",
        title: "Update"
    });
    $.__views.rowContainer.add($.__views.btnChangeQty);
    $.__views.btnDelete = Ti.UI.createButton({
        id: "btnDelete",
        top: "30",
        left: "380",
        height: "30",
        width: "35",
        backgroundImage: "/aimages/btndelete.png"
    });
    $.__views.rowContainer.add($.__views.btnDelete);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;