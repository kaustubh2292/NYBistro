function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.menuWin = Ti.UI.createWindow({
        id: "menuWin",
        backgroundColor: "white",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.menuWin && $.addTopLevelView($.__views.menuWin);
    $.__views.theTable = Ti.UI.createTableView({
        id: "theTable"
    });
    $.__views.menuWin.add($.__views.theTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    var tbldata = [];
    for (var i = 0; 8 > i; i++) {
        var row = Alloy.createController("categoryrow", {
            primaryLabel: "This is row " + i,
            subTitle: "Subtitle " + i,
            rownum: i
        }).getView();
        tbldata.push(row);
    }
    tbldata.push(Alloy.createController("categoryrow", {
        primaryLabel: "This is the last row",
        subTitle: "The last subtitle ",
        rownum: "last"
    }).getView());
    $.theTable.data = tbldata;
    $.menuWin.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.menuWin.getActivity().actionBar;
            actionBar.setTitle("CATEGORY");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/toolbarbg.png");
            actionBar.setIcon("/aimages/arrowbutton.png");
            actionBar.onHomeIconItemSelected = function() {
                $.menuWin.close();
            };
        }
    });
    $.theTable.addEventListener("click", function() {
        if ("iphone" == osname || "ipad" == osname) {
            var catDetailsWnd = Alloy.createController("categorydetails").getView();
            var navWnd = Alloy.Globals.navWnd;
            navWnd.openWindow(catDetailsWnd, {
                animated: true
            });
        } else if ("android" == osname) {
            var catDetailsWnd = Alloy.createController("categorydetails").getView();
            catDetailsWnd.open();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;