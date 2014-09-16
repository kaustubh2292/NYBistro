function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.loginWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "loginWnd"
    });
    $.__views.loginWnd && $.addTopLevelView($.__views.loginWnd);
    $.__views.__alloyId41 = Ti.UI.createView({
        backgroundColor: "#ffffff",
        top: "200",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId41"
    });
    $.__views.loginWnd.add($.__views.__alloyId41);
    $.__views.lblEmail = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblEmail",
        text: "Email Address:"
    });
    $.__views.__alloyId41.add($.__views.lblEmail);
    $.__views.txtEmailAddress = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtEmailAddress"
    });
    $.__views.__alloyId41.add($.__views.txtEmailAddress);
    $.__views.lblPassword = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        top: "8",
        left: "9",
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblPassword",
        text: "Password:"
    });
    $.__views.__alloyId41.add($.__views.lblPassword);
    $.__views.txtPassword = Ti.UI.createTextField({
        top: "8",
        left: "8",
        width: "450",
        height: "50",
        backgroundColor: "#e9e7db",
        borderRadius: "5",
        id: "txtPassword"
    });
    $.__views.__alloyId41.add($.__views.txtPassword);
    $.__views.__alloyId42 = Ti.UI.createView({
        top: "10",
        layout: "horizontal",
        height: Ti.UI.SIZE,
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.btnSubmit = Ti.UI.createButton({
        id: "btnSubmit",
        backgroundImage: "/aimages/btnsubmitbkg.png",
        top: "10",
        width: "120",
        height: "50"
    });
    $.__views.__alloyId42.add($.__views.btnSubmit);
    $.__views.btnSignUp = Ti.UI.createButton({
        id: "btnSignUp",
        backgroundImage: "/aimages/btnsubmitbkg.png",
        top: "10",
        width: "120",
        height: "50"
    });
    $.__views.__alloyId42.add($.__views.btnSignUp);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.btnSubmit.addEventListener("click", function() {
        alert("hi");
    });
    $.loginWnd.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.loginWnd.getActivity().actionBar;
            actionBar.setTitle("");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/toolbarbg.png");
            actionBar.setIcon("/aimages/arrowbutton.png");
            actionBar.onHomeIconItemSelected = function() {
                $.loginWnd.close();
            };
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;