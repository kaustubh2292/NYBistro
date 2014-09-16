function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "shoppingcartrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
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
        id: "primaryLabel"
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
        top: "32"
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
    var __alloyId31 = [];
    __alloyId31.push("2");
    __alloyId31.push("3");
    __alloyId31.push("4");
    $.__views.qtyOptions = Ti.UI.createOptionDialog({
        options: __alloyId31,
        id: "qtyOptions",
        title: "Select Qunatity"
    });
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.primaryLabel.text = args.primaryLabel || "";
    $.price.text = "Price: $ 10.99";
    $.quantity.text = "Quantity: 1";
    $.btnChangeQty.addEventListener("click", function() {
        alert("Quqntity Changed");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;