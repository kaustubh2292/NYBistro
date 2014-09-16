function Controller() {
    function __alloyId108(e) {
        if (e && e.fromAdapter) return;
        __alloyId108.opts || {};
        var models = __alloyId107.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId106 = models[i];
            __alloyId106.__transform = {};
        }
        $.__views.theTable.setData(rows);
    }
    function __alloyId119(e) {
        if (e && e.fromAdapter) return;
        __alloyId119.opts || {};
        var models = __alloyId118.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId115 = models[i];
            __alloyId115.__transform = {};
            var __alloyId117 = Alloy.createController("shoppingcartrow", {
                $model: __alloyId115,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId117.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function reCalculateTotal() {
        runningTotal = 0;
        cartItems.forEach(function(item) {
            runningTotal += item.get("Total");
        });
        runningTotal = roundNumber(runningTotal, 2);
        $.lblSubtotalVal.text = "$" + runningTotal;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "shoppingcart";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("ShoppingCart");
    var __alloyId107;
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
    var __alloyId118 = Alloy.Collections["ShoppingCart"] || ShoppingCart;
    __alloyId118.on("fetch destroy change add remove reset", __alloyId119);
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
        left: "220"
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
    var __alloyId121 = [];
    __alloyId121.push("1");
    __alloyId121.push("2");
    __alloyId121.push("3");
    __alloyId121.push("4");
    $.__views.qtyOptions = Ti.UI.createOptionDialog({
        options: __alloyId121,
        id: "qtyOptions",
        title: "Select Qunatity"
    });
    exports.destroy = function() {
        __alloyId107.off("fetch destroy change add remove reset", __alloyId108);
        __alloyId118.off("fetch destroy change add remove reset", __alloyId119);
    };
    _.extend($, $.__views);
    var osname = "android";
    Alloy.Globals.roundNumber = function(number, digits) {
        multiple = Math.pow(10, digits);
        rndedNum = Math.round(number * multiple) / multiple;
        return rndedNum;
    };
    var cartItems = Alloy.Collections.ShoppingCart;
    var roundNumber = Alloy.Globals.roundNumber;
    var runningTotal = 0;
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
    cartItems.on("fetch", function() {
        reCalculateTotal();
    });
    cartItems.on("remove", function() {
        reCalculateTotal();
    });
    $.qtyOptions.addEventListener("click", function(e) {
        var newQty = e.index + 1;
        cartItem.set("Quantity", newQty);
        cartItem.set("Total", roundNumber(newQty * cartItem.get("ItemPrice"), 2));
        reCalculateTotal();
    });
    cartItems.fetch();
    $.theTable.addEventListener("click", function(e) {
        if ("iphone" == osname || "ipad" == osname) {
            cartItem = cartItems.at(e.index);
            if ("[object btnDelete]" === e.source.toString()) {
                cartItems.remove(cartItem);
                cartItem.destroy();
            } else "[object btnChangeQty]" === e.source.toString() && $.qtyOptions.show();
        } else if ("android" === osname) {
            cartItem = cartItems.at(e.index);
            if ("btnDelete" === e.source.id.toString()) {
                cartItems.remove(cartItem);
                cartItem.destroy();
            } else "btnChangeQty" === e.source.id.toString() && $.qtyOptions.show();
        }
    });
    $.btnCheckout.addEventListener("click", function() {
        var order = Alloy.Models.instance("Order");
        order.set("OrderId", 10);
        var lineItems = new Array();
        for (i = 0; cartItems.length > i; i++) lineItems[i] = cartItems.at(i);
        order.set("LineItems", JSON.stringify(lineItems));
        order.set("SubTotal", runningTotal);
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