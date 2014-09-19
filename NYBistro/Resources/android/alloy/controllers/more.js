function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "more";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.moreWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "moreWnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.moreWnd && $.addTopLevelView($.__views.moreWnd);
    $.__views.containerView = Ti.UI.createView({
        backgroundColor: "white",
        top: "10",
        left: "10",
        right: "10",
        height: Ti.UI.SIZE,
        id: "containerView"
    });
    $.__views.moreWnd.add($.__views.containerView);
    $.__views.moreTable = Ti.UI.createTableView({
        top: "5",
        borderRadius: "7",
        borderWidth: "1",
        borderColor: "#95512c",
        id: "moreTable",
        backgroundColor: "white"
    });
    $.__views.containerView.add($.__views.moreTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    if ("iphone" === osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backtohomebtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.moreWnd);
        });
        $.moreWnd.setLeftNavButton(backButton);
        $.moreWnd.setBarImage("/images/morebarbkg.png");
        var tbldata = [];
        for (var i = 0; 2 > i; i++) {
            var row = Alloy.createController("morerow", {
                rownum: i
            }).getView();
            tbldata.push(row);
        }
        $.moreTable.data = tbldata;
    } else if ("android" === osname) {
        var tbldata = [];
        for (var i = 0; 2 > i; i++) {
            var row = Alloy.createController("morerow", {
                rownum: i
            }).getView();
            tbldata.push(row);
        }
        $.moreTable.data = tbldata;
        $.moreWnd.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.moreWnd.getActivity().actionBar;
                actionBar.setTitle("");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/morebarbkg.png");
                actionBar.setIcon("/aimages/arrowbutton.png");
                actionBar.onHomeIconItemSelected = function() {
                    $.moreWnd.close();
                };
            }
        });
        $.moreTable.footerView = Ti.UI.createView({
            height: 1,
            backgroundColor: "transparent"
        });
    }
    $.moreTable.addEventListener("click", function(e) {
        if (0 == e.index) {
            if ("iphone" === osname) {
                var tellAfrndWnd = Alloy.createController("tellafriend").getView();
                navWnd.openWindow(tellAfrndWnd, {
                    animated: true
                });
            } else if ("android" === osname) {
                var tellAfrndWnd = Alloy.createController("tellafriend").getView();
                tellAfrndWnd.open();
            }
        } else 1 == e.index && Ti.Platform.openURL("http://www.google.com");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;