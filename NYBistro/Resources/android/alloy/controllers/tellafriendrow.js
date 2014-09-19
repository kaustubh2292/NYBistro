function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tellafriendrow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId138 = Ti.UI.createTableViewRow({
        backgroundColor: "#f9f7ec",
        height: Ti.UI.SIZE,
        id: "__alloyId138"
    });
    $.__views.__alloyId138 && $.addTopLevelView($.__views.__alloyId138);
    $.__views.imgViewIcon = Ti.UI.createImageView({
        left: "10",
        top: "10",
        bottom: "10",
        height: "25",
        width: "28",
        id: "imgViewIcon"
    });
    $.__views.__alloyId138.add($.__views.imgViewIcon);
    $.__views.lblTitle = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 16,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblTitle",
        left: "50"
    });
    $.__views.__alloyId138.add($.__views.lblTitle);
    $.__views.shareChkBox = Ti.UI.createButton({
        backgroundImage: "/aimages/chkboxunchecked.png",
        width: "20",
        height: "20",
        right: "20",
        id: "shareChkBox"
    });
    $.__views.__alloyId138.add($.__views.shareChkBox);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var osname = "android";
    if ("iphone" === osname) switch (args.rownum) {
      case 0:
        $.imgViewIcon.width = "29.5";
        $.imgViewIcon.height = "22.5";
        $.imgViewIcon.image = "/images/emailicon.png";
        $.lblTitle.text = "Share by Email";
        break;

      case 1:
        $.imgViewIcon.width = "29.5";
        $.imgViewIcon.height = "32";
        $.imgViewIcon.image = "/images/smsicon.png";
        $.lblTitle.text = "Share by Text";
        break;

      case 2:
        $.imgViewIcon.width = "15";
        $.imgViewIcon.height = "28.5";
        $.imgViewIcon.image = "/images/facebookicon.png";
        $.lblTitle.text = "Share by Facebook";
        break;

      case 3:
        $.imgViewIcon.width = "33";
        $.imgViewIcon.height = "27.5";
        $.imgViewIcon.image = "/images/twittericon.png";
        $.lblTitle.text = "Share by Twitter";
    } else if ("android" === osname) switch (args.rownum) {
      case 0:
        $.imgViewIcon.width = "29.5";
        $.imgViewIcon.height = "22.5";
        $.imgViewIcon.image = "/aimages/emailicon.png";
        $.lblTitle.text = "Share by Email";
        break;

      case 1:
        $.imgViewIcon.width = "29.5";
        $.imgViewIcon.height = "32";
        $.imgViewIcon.image = "/aimages/smsicon.png";
        $.lblTitle.text = "Share by Text";
        break;

      case 2:
        $.imgViewIcon.width = "15";
        $.imgViewIcon.height = "28.5";
        $.imgViewIcon.image = "/aimages/facebookicon.png";
        $.lblTitle.text = "Share by Facebook";
        break;

      case 3:
        $.imgViewIcon.width = "33";
        $.imgViewIcon.height = "27.5";
        $.imgViewIcon.image = "/aimages/twittericon.png";
        $.lblTitle.text = "Share by Twitter";
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;