function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "optionsrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowView = Ti.UI.createTableViewRow({
        id: "rowView",
        OptionsId: "undefined" != typeof $model.__transform["OptionId"] ? $model.__transform["OptionId"] : $model.get("OptionId")
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.containerView = Ti.UI.createView({
        backgroundImage: "/aimages/profilebg.png",
        height: 40,
        id: "containerView",
        layout: "horizontal"
    });
    $.__views.rowView.add($.__views.containerView);
    $.__views.lblOption = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblOption",
        left: "4",
        top: "10",
        text: "undefined" != typeof $model.__transform["Name"] ? $model.__transform["Name"] : $model.get("Name"),
        width: "120"
    });
    $.__views.containerView.add($.__views.lblOption);
    $.__views.lblPrice = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblPrice",
        left: "60",
        top: "10",
        text: "undefined" != typeof $model.__transform["Price"] ? $model.__transform["Price"] : $model.get("Price")
    });
    $.__views.containerView.add($.__views.lblPrice);
    $.__views.imgCheckBox = Ti.UI.createButton({
        backgroundImage: "/aimages/chkboxunchecked.png",
        width: "25",
        height: "25",
        id: "imgCheckBox",
        left: "87",
        top: "10"
    });
    $.__views.containerView.add($.__views.imgCheckBox);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;