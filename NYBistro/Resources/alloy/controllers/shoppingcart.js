function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "shoppingcart";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.cartwnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "cartwnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.cartwnd && $.addTopLevelView($.__views.cartwnd);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView",
        layout: "vertical"
    });
    $.__views.cartwnd.add($.__views.containerView);
    $.__views.theTable = Ti.UI.createTableView({
        id: "theTable",
        height: "80%",
        allowsSelection: "false"
    });
    $.__views.containerView.add($.__views.theTable);
    $.__views.subtotalView = Ti.UI.createView({
        id: "subtotalView",
        top: "5",
        backgroundImage: "/aimages/subtotalbkg.png",
        width: "450",
        height: "50",
        layout: "horizontal"
    });
    $.__views.containerView.add($.__views.subtotalView);
    $.__views.lblSubTotalText = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        color: "#fe0000",
        height: Ti.UI.SIZE,
        id: "lblSubTotalText",
        top: "12",
        left: "4",
        text: "Sub Total:",
        textAlign: "left"
    });
    $.__views.subtotalView.add($.__views.lblSubTotalText);
    $.__views.lblSubtotalVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 22,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblSubtotalVal",
        top: "12",
        left: "220",
        text: "$ 34.97"
    });
    $.__views.subtotalView.add($.__views.lblSubtotalVal);
    $.__views.btnCheckout = Ti.UI.createButton({
        id: "btnCheckout",
        backgroundImage: "/aimages/btncheckoutbkg.png",
        top: "10",
        bottom: "2",
        width: "158",
        height: "42"
    });
    $.__views.containerView.add($.__views.btnCheckout);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backtohomebtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.cartwnd);
        });
        $.cartwnd.setLeftNavButton(backButton);
        $.cartwnd.setBarImage("/images/cartbarbkg.png");
    } else "android" === osname && $.cartwnd.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.cartwnd.getActivity().actionBar;
            actionBar.setTitle("");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/cartbarbkg.png");
            actionBar.setIcon("/aimages/arrowbutton.png");
            actionBar.onHomeIconItemSelected = function() {
                $.cartwnd.close();
            };
        }
    });
    var tbldata = [];
    for (var i = 0; 3 > i; i++) {
        var row = Alloy.createController("shoppingcartrow", {
            primaryLabel: "Item " + i,
            subTitle: "Subtitle " + i,
            rownum: i
        }).getView();
        tbldata.push(row);
    }
    $.theTable.data = tbldata;
    $.theTable.addEventListener("click", function(e) {
        "[object btnDelete]" == e.source.toString() && alert("Delete button clicked");
    });
    $.btnCheckout.addEventListener("click", function() {
        if ("iphone" == osname || "ipad" == osname) {
            var processOrderWnd = Alloy.createController("processorder").getView();
            navWnd.openWindow(processOrderWnd, {
                animated: true
            });
        } else if ("android" === osname) {
            var processOrderWnd = Alloy.createController("processorder").getView();
            processOrderWnd.open();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;