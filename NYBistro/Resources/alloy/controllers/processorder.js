function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "processorder";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.orderWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "orderWnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.orderWnd && $.addTopLevelView($.__views.orderWnd);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showshowHorizontalScrollIndicator: "false",
        height: "100%"
    });
    $.__views.orderWnd.add($.__views.scrollView);
    $.__views.contentView = Ti.UI.createView({
        id: "contentView",
        top: "5",
        layout: "vertical"
    });
    $.__views.scrollView.add($.__views.contentView);
    $.__views.optionDisplay = Ti.UI.createView({
        id: "optionDisplay",
        top: "10",
        width: "453",
        height: "50",
        layout: "horizontal",
        backgroundImage: "/aimages/optionsviewbkg.png"
    });
    $.__views.contentView.add($.__views.optionDisplay);
    $.__views.lblChooseOptions = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblChooseOptions",
        top: "10",
        left: "4",
        text: "Choose options to add"
    });
    $.__views.optionDisplay.add($.__views.lblChooseOptions);
    $.__views.btnShowHideOptions = Ti.UI.createButton({
        height: 14,
        width: 21,
        backgroundImage: "/aimages/downarraow.png",
        id: "btnShowHideOptions",
        top: "12",
        left: "245"
    });
    $.__views.optionDisplay.add($.__views.btnShowHideOptions);
    $.__views.optiontablecontainer = Ti.UI.createView({
        id: "optiontablecontainer",
        width: "95%",
        height: "0.1"
    });
    $.__views.contentView.add($.__views.optiontablecontainer);
    $.__views.optionsTable = Ti.UI.createTableView({
        id: "optionsTable",
        top: "5",
        height: "95%",
        borderWidth: "1",
        borderRadius: "10",
        borderColor: "black",
        width: "95%",
        allowsSelection: "false"
    });
    $.__views.optiontablecontainer.add($.__views.optionsTable);
    $.__views.deliveryOptions = Ti.UI.createView({
        id: "deliveryOptions",
        top: "5",
        width: "453",
        height: "50",
        layout: "horizontal",
        borderRadius: "10",
        borderColor: "blue",
        borderWidth: "1"
    });
    $.__views.contentView.add($.__views.deliveryOptions);
    $.__views.btnCarryOut = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        left: 0,
        title: "Carry Out",
        color: "black",
        backgroundColor: "#fff",
        borderColor: "blue",
        borderWidth: 1,
        id: "btnCarryOut"
    });
    $.__views.deliveryOptions.add($.__views.btnCarryOut);
    $.__views.btnDelivery = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        title: "Delivery",
        color: "black",
        backgroundColor: "#fff",
        borderColor: "blue",
        borderWidth: 1,
        id: "btnDelivery"
    });
    $.__views.deliveryOptions.add($.__views.btnDelivery);
    $.__views.btnEathere = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        title: "Eat Here",
        color: "black",
        backgroundColor: "#fff",
        id: "btnEathere"
    });
    $.__views.deliveryOptions.add($.__views.btnEathere);
    $.__views.subtotalView = Ti.UI.createView({
        id: "subtotalView",
        top: "10",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "453",
        height: "50",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.subtotalView);
    $.__views.lblSubTotalText = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#a4451c",
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
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblSubtotalVal",
        top: "12",
        left: "290",
        text: "$ 34.97"
    });
    $.__views.subtotalView.add($.__views.lblSubtotalVal);
    $.__views.optionalCharges = Ti.UI.createView({
        id: "optionalCharges",
        top: "5",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "453",
        height: "0.1",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.optionalCharges);
    $.__views.lblOptCharges = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblOptCharges",
        top: "12",
        left: "4",
        text: "Optional Item Charges:",
        textAlign: "left"
    });
    $.__views.optionalCharges.add($.__views.lblOptCharges);
    $.__views.lblOptChargesVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblOptChargesVal",
        top: "12",
        left: "200",
        text: "$ 1.99"
    });
    $.__views.optionalCharges.add($.__views.lblOptChargesVal);
    $.__views.delCharges = Ti.UI.createView({
        id: "delCharges",
        top: "5",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "453",
        height: "0.1",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.delCharges);
    $.__views.lblDelCharges = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblDelCharges",
        top: "12",
        left: "4",
        text: "Delivery Charges:",
        textAlign: "left"
    });
    $.__views.delCharges.add($.__views.lblDelCharges);
    $.__views.lblDelChargesVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblDelChargesVal",
        top: "12",
        left: "240",
        text: "$ 1.99"
    });
    $.__views.delCharges.add($.__views.lblDelChargesVal);
    $.__views.estTaxes = Ti.UI.createView({
        id: "estTaxes",
        top: "5",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "453",
        height: "50",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.estTaxes);
    $.__views.lblTaxText = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblTaxText",
        top: "12",
        left: "4",
        text: "Estimated Taxes:",
        textAlign: "left"
    });
    $.__views.estTaxes.add($.__views.lblTaxText);
    $.__views.lblTaxVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblTaxVal",
        top: "12",
        left: "240",
        text: "$ 2.30"
    });
    $.__views.estTaxes.add($.__views.lblTaxVal);
    $.__views.paymentOptions = Ti.UI.createView({
        id: "paymentOptions",
        top: "15",
        width: "453",
        height: "50",
        layout: "horizontal",
        backgroundImage: "/aimages/optionsviewbkg.png",
        borderRadius: "10",
        borderColor: "blue",
        borderWidth: "1"
    });
    $.__views.contentView.add($.__views.paymentOptions);
    $.__views.btnCash = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        left: 0,
        title: "Cash",
        color: "black",
        backgroundColor: "#fff",
        borderColor: "blue",
        borderWidth: 1,
        id: "btnCash"
    });
    $.__views.paymentOptions.add($.__views.btnCash);
    $.__views.btnCreditCard = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        title: "Credit Card",
        color: "black",
        backgroundColor: "#fff",
        borderColor: "blue",
        borderWidth: 1,
        id: "btnCreditCard"
    });
    $.__views.paymentOptions.add($.__views.btnCreditCard);
    $.__views.btnPaypal = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 150,
        title: "Paypal",
        color: "black",
        backgroundColor: "#fff",
        id: "btnPaypal"
    });
    $.__views.paymentOptions.add($.__views.btnPaypal);
    $.__views.btnPlaceOrder = Ti.UI.createButton({
        id: "btnPlaceOrder",
        backgroundImage: "/aimages/btnplaceorderbkg.png",
        top: "30",
        bottom: "2",
        width: "180",
        height: "50"
    });
    $.__views.contentView.add($.__views.btnPlaceOrder);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var osname = "android";
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backbtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.orderWnd);
        });
        $.orderWnd.setLeftNavButton(backButton);
        $.orderWnd.setBarImage("/images/orderdetailsbarbkg.png");
        var tbldata = [];
        for (var i = 0; 4 > i; i++) {
            var row = Alloy.createController("optionsrow", {
                optionname: "Optional item " + i,
                optionprice: "$ " + i + ".99",
                rownum: i
            }).getView();
            tbldata.push(row);
        }
        $.optionsTable.data = tbldata;
        var optChargeCnt = 0;
        $.optionsTable.addEventListener("click", function(e) {
            if ("[object imgCheckBox]" == e.source.toString()) {
                var chkbox = e.source;
                if ("/images/chkboxunchecked.png" == chkbox.backgroundImage) {
                    chkbox.backgroundImage = "/images/chkboxchecked.png";
                    $.optionalCharges.animate({
                        duration: 200,
                        height: "30",
                        curve: Ti.UI.ANIMATION_CURVE_LINEAR
                    });
                    optChargeCnt++;
                } else if ("/images/chkboxchecked.png" == chkbox.backgroundImage) {
                    chkbox.backgroundImage = "/images/chkboxunchecked.png";
                    optChargeCnt--;
                    0 >= optChargeCnt && $.optionalCharges.animate({
                        duration: 200,
                        height: "0.1",
                        curve: Ti.UI.ANIMATION_CURVE_LINEAR
                    });
                }
            }
        });
        var movelabel = Ti.UI.createAnimation({
            duration: 1e3,
            curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
        });
        var collapsed = true;
        $.btnShowHideOptions.addEventListener("click", function() {
            if (collapsed) {
                var showtable = Ti.UI.createAnimation({
                    duration: 200,
                    height: "30%",
                    curve: Ti.UI.ANIMATION_CURVE_LINEAR
                });
                $.deliveryOptions.animate(movelabel, function() {
                    $.optionsTable.animate(showtable);
                });
                $.btnShowHideOptions.backgroundImage = "/images/uparraow.png";
                collapsed = false;
            } else {
                var hidetable = Ti.UI.createAnimation({
                    duration: 200,
                    height: "0.1",
                    curve: Ti.UI.ANIMATION_CURVE_LINEAR
                });
                $.deliveryOptions.animate(movelabel, function() {
                    $.optionsTable.animate(hidetable);
                });
                $.btnShowHideOptions.backgroundImage = "/images/downarraow.png";
                collapsed = true;
            }
        });
        var delChargesAdded = false;
        $.delOptionsBar.addEventListener("click", function(e) {
            if (1 == e.index) {
                $.delCharges.animate({
                    duration: 200,
                    height: "30",
                    curve: Ti.UI.ANIMATION_CURVE_LINEAR
                });
                delChargesAdded = true;
            } else if (delChargesAdded) {
                $.delCharges.animate({
                    duration: 200,
                    height: "0.01",
                    curve: Ti.UI.ANIMATION_CURVE_LINEAR
                });
                delChargesAdded = false;
            }
        });
    } else if ("android" === osname) {
        var tbldata = [];
        for (var i = 0; 5 > i; i++) {
            var row = Alloy.createController("optionsrow", {
                optionname: "Optional item " + i,
                optionprice: "$ " + i + ".99",
                rownum: i
            }).getView();
            tbldata.push(row);
        }
        Ti.API.info("Table Data length = " + tbldata.length);
        $.optionsTable.data = tbldata;
        $.orderWnd.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.orderWnd.getActivity().actionBar;
                actionBar.setTitle("");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/orderdetailsbarbk.png");
                actionBar.setIcon("/aimages/backbtn.png");
                actionBar.onHomeIconItemSelected = function() {
                    $.orderWnd.close();
                };
            }
        });
        var optChargeCnt = 0;
        $.optionsTable.addEventListener("click", function(e) {
            Ti.API.info(">>>>>>>>>" + e.source.toString());
            if ("[object Button]" == e.source.toString()) {
                var chkbox = e.source;
                if ("/aimages/chkboxunchecked.png" == chkbox.backgroundImage) {
                    chkbox.backgroundImage = "/aimages/chkboxchecked.png";
                    $.optionalCharges.animate({
                        duration: 200,
                        height: "50"
                    });
                    optChargeCnt++;
                } else if ("/aimages/chkboxchecked.png" == chkbox.backgroundImage) {
                    chkbox.backgroundImage = "/aimages/chkboxunchecked.png";
                    optChargeCnt--;
                    0 >= optChargeCnt && $.optionalCharges.animate({
                        duration: 200
                    });
                }
            }
        });
        var movelabel = {
            top: 20,
            duration: 1e3
        };
        var collapsed = true;
        $.btnShowHideOptions.addEventListener("click", function() {
            if (collapsed) {
                var showtable = Titanium.UI.createAnimation();
                showtable.height = "45%";
                showtable.duration = 400;
                $.btnShowHideOptions.backgroundImage = "/aimages/uparraow.png";
                $.optiontablecontainer.animate({
                    height: "30%",
                    duration: 200
                });
                Ti.API.info("table animated for showable>>>>>" + $.optionsTable.getHeight());
                collapsed = false;
            } else {
                var hidetable = Titanium.UI.createAnimation();
                hidetable.height = "0.1";
                hidetable.duration = 200;
                $.btnShowHideOptions.backgroundImage = "/aimages/downarraow.png";
                $.optiontablecontainer.animate({
                    height: "0.1%",
                    duration: 300
                });
                Ti.API.info("table animated for hide>>>>>" + $.optionsTable.getHeight());
                collapsed = true;
            }
        });
        $.btnCarryOut.addEventListener("click", function() {
            $.btnCarryOut.backgroundColor = "blue";
            $.btnEathere.backgroundColor = "#fff";
            $.btnDelivery.backgroundColor = "#fff";
            $.delCharges.animate({
                duration: 200,
                height: "0.01"
            });
        });
        $.btnEathere.addEventListener("click", function() {
            $.btnCarryOut.backgroundColor = "#fff";
            $.btnEathere.backgroundColor = "blue";
            $.btnDelivery.backgroundColor = "#fff";
            $.delCharges.animate({
                duration: 200,
                height: "0.01"
            });
        });
        $.btnDelivery.addEventListener("click", function() {
            $.btnCarryOut.backgroundColor = "#fff";
            $.btnEathere.backgroundColor = "#fff";
            $.btnDelivery.backgroundColor = "blue";
            $.delCharges.animate({
                duration: 200,
                height: "50"
            });
        });
        $.btnCash.addEventListener("click", function() {
            $.btnCash.backgroundColor = "blue";
            $.btnCreditCard.backgroundColor = "#fff";
            $.btnPaypal.backgroundColor = "#fff";
        });
        $.btnCreditCard.addEventListener("click", function() {
            $.btnCreditCard.backgroundColor = "blue";
            $.btnCash.backgroundColor = "#fff";
            $.btnPaypal.backgroundColor = "#fff";
        });
        $.btnPaypal.addEventListener("click", function() {
            $.btnPaypal.backgroundColor = "blue";
            $.btnCash.backgroundColor = "#fff";
            $.btnCreditCard.backgroundColor = "#fff";
        });
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;