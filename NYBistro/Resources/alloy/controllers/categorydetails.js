function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categorydetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winCatDetails = Ti.UI.createWindow({
        id: "winCatDetails",
        backgroundColor: "white",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.winCatDetails && $.addTopLevelView($.__views.winCatDetails);
    $.__views.catDetailsTable = Ti.UI.createTableView({
        id: "catDetailsTable"
    });
    $.__views.winCatDetails.add($.__views.catDetailsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    var tbldata = [];
    for (var i = 0; 8 > i; i++) {
        var row = Alloy.createController("categorydetailsrow", {
            primaryLabel: "This is row " + i,
            subTitle: "Subtitle " + i,
            rownum: i,
            buttontitle: "$24.00"
        }).getView();
        tbldata.push(row);
    }
    tbldata.push(Alloy.createController("categorydetailsrow", {
        primaryLabel: "This is the last row",
        subTitle: "The last subtitle ",
        rownum: "last",
        buttontitle: "$24.00"
    }).getView());
    $.catDetailsTable.data = tbldata;
    $.winCatDetails.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.winCatDetails.getActivity().actionBar;
            actionBar.setTitle("DETAILS");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/toolbarbg.png");
            actionBar.setIcon("/aimages/arrowbutton.png");
            actionBar.onHomeIconItemSelected = function() {
                var homeWin = Alloy.createController("index").getView();
                homeWin.open();
                $.winCatDetails.close();
            };
        }
    });
    $.catDetailsTable.addEventListener("click", function() {
        if ("android" === osname) {
            var itemdetailwin = Alloy.createController("itemdetails").getView();
            itemdetailwin.open();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;