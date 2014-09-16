function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "user";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.userwnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "userwnd"
    });
    $.__views.userwnd && $.addTopLevelView($.__views.userwnd);
    $.__views.lbl = Ti.UI.createLabel({
        text: "User window",
        id: "lbl"
    });
    $.__views.userwnd.add($.__views.lbl);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;