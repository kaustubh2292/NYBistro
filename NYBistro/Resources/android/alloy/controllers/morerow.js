function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "morerow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        backgroundColor: "#f9f7ec",
        height: Ti.UI.SIZE,
        id: "__alloyId55"
    });
    $.__views.__alloyId55 && $.addTopLevelView($.__views.__alloyId55);
    $.__views.imgViewIcon = Ti.UI.createImageView({
        left: "10",
        top: "10",
        bottom: "10",
        height: "25",
        width: "28",
        id: "imgViewIcon"
    });
    $.__views.__alloyId55.add($.__views.imgViewIcon);
    $.__views.lblTitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblTitle",
        left: "50"
    });
    $.__views.__alloyId55.add($.__views.lblTitle);
    $.__views.rightArrowView = Ti.UI.createImageView({
        id: "rightArrowView",
        right: "20",
        height: "25",
        width: "14",
        image: "/aimages/arrow2.png"
    });
    $.__views.__alloyId55.add($.__views.rightArrowView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var osname = "android";
    if ("iphone" === osname) {
        if (0 == args.rownum) {
            $.imgViewIcon.image = "/images/tellafriend.png";
            $.lblTitle.text = "Tell a Friend";
        } else if (1 == args.rownum) {
            $.imgViewIcon.image = "/images/aboutus.png";
            $.lblTitle.text = "About Us";
        }
    } else if ("android" === osname) if (0 == args.rownum) {
        $.imgViewIcon.image = "/aimages/tellafriend.png";
        $.lblTitle.text = "Tell a Friend";
    } else if (1 == args.rownum) {
        $.imgViewIcon.image = "/aimages/aboutus.png";
        $.lblTitle.text = "About Us";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;