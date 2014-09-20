function Controller() {
    function __alloyId76(e) {
        if (e && e.fromAdapter) return;
        __alloyId76.opts || {};
        var models = __alloyId75.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId72 = models[i];
            __alloyId72.__transform = transformFunction(__alloyId72);
            var __alloyId74 = Alloy.createController("optionsrow", {
                $model: __alloyId72,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId74.getViewEx({
                recurse: true
            }));
        }
        $.__views.optionsTable.setData(rows);
    }
    function __alloyId97(e) {
        if (e && e.fromAdapter) return;
        __alloyId97.opts || {};
        var models = __alloyId96.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId93 = models[i];
            __alloyId93.__transform = {};
            var __alloyId95 = Alloy.createController("optionsrow", {
                $model: __alloyId93,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId95.getViewEx({
                recurse: true
            }));
        }
        $.__views.optionsTable.setData(rows);
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.Price = "$" + transform.Price;
        return transform;
    }
    function applyCouponListener(e) {
        $.couponsInfo.height = "30";
        $.couponsTable.height = Ti.UI.SIZE;
        lineitems = eval(orderData.toJSON().LineItems);
        if ("Regular" === e.coupondata.CouponType) {
            couponitems = [];
            couponitems = JSON.parse(e.coupondata.ItemId);
            for (var i = 0; lineitems.length > i; i++) {
                lineitem = lineitems[i];
                if (_.indexOf(couponitems, lineitem.ItemId) > -1) {
                    orderData.set("Total", roundNumber(orderData.get("Total") - e.coupondata.CouponVal, 2));
                    $.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"), 2);
                }
            }
        } else if ("Discount" === e.coupondata.CouponType) {
            orderData.set("Total", roundNumber(orderData.get("Total") - orderData.get("Total") * e.coupondata.CouponVal / 100), 2);
            $.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"), 2);
        }
        var appliedCouponRow = Alloy.createController("appliedcouponrow", {
            couponName: e.coupondata.CouponName,
            discountVal: e.coupondata.CouponVal,
            couponType: e.coupondata.CouponType
        }).getView();
        appliedCoupons.push(appliedCouponRow);
        $.couponsTable.data = appliedCoupons;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "processorder";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("OptionalItem");
    var __alloyId75;
    var __alloyId78;
    var __alloyId82;
    var __alloyId83;
    var __alloyId84;
    var __alloyId86;
    var __alloyId90;
    var __alloyId91;
    var __alloyId92;
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
        width: "310",
        height: "30",
        layout: "horizontal",
        backgroundImage: "/aimages/optionsviewbkg.png"
    });
    $.__views.contentView.add($.__views.optionDisplay);
    $.__views.lblChooseOptions = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblChooseOptions",
        top: "5",
        left: "4",
        text: "Choose options to add"
    });
    $.__views.optionDisplay.add($.__views.lblChooseOptions);
    $.__views.optiontablecontainer = Ti.UI.createView({
        id: "optiontablecontainer",
        width: "310",
        height: "70"
    });
    $.__views.contentView.add($.__views.optiontablecontainer);
    $.__views.optionsTable = Ti.UI.createTableView({
        id: "optionsTable",
        top: "5",
        height: "95%",
        borderWidth: "1",
        borderRadius: "10",
        borderColor: "black",
        allowsSelection: "false"
    });
    $.__views.optiontablecontainer.add($.__views.optionsTable);
    var __alloyId96 = Alloy.Collections["OptionalItem"] || OptionalItem;
    __alloyId96.on("fetch destroy change add remove reset", __alloyId97);
    $.__views.deliveryOptions = Ti.UI.createView({
        id: "deliveryOptions",
        top: "10",
        width: "310",
        height: "30",
        layout: "horizontal",
        borderRadius: "10",
        borderColor: "blue",
        borderWidth: "1"
    });
    $.__views.contentView.add($.__views.deliveryOptions);
    $.__views.btnCarryOut = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 102,
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
        width: 102,
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
        width: 102,
        title: "Eat Here",
        color: "black",
        backgroundColor: "#fff",
        id: "btnEathere"
    });
    $.__views.deliveryOptions.add($.__views.btnEathere);
    $.__views.subtotalView = Ti.UI.createView({
        id: "subtotalView",
        top: "7",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "310",
        height: "30",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.subtotalView);
    $.__views.lblSubTotalText = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblSubTotalText",
        top: "5",
        left: "3",
        text: "Sub Total:",
        textAlign: "left"
    });
    $.__views.subtotalView.add($.__views.lblSubTotalText);
    $.__views.lblSubtotalVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblSubtotalVal",
        top: "5",
        left: "190"
    });
    $.__views.subtotalView.add($.__views.lblSubtotalVal);
    $.__views.optionalCharges = Ti.UI.createView({
        id: "optionalCharges",
        top: "3",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "310",
        height: "30",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.optionalCharges);
    $.__views.lblOptCharges = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblOptCharges",
        top: "5",
        left: "3",
        text: "Optional Item Charges:",
        textAlign: "left"
    });
    $.__views.optionalCharges.add($.__views.lblOptCharges);
    $.__views.lblOptChargesVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblOptChargesVal",
        top: "5",
        left: "100"
    });
    $.__views.optionalCharges.add($.__views.lblOptChargesVal);
    $.__views.delCharges = Ti.UI.createView({
        id: "delCharges",
        top: "3",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "310",
        height: "30",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.delCharges);
    $.__views.lblDelCharges = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblDelCharges",
        top: "5",
        left: "3",
        text: "Delivery Charges:",
        textAlign: "left"
    });
    $.__views.delCharges.add($.__views.lblDelCharges);
    $.__views.lblDelChargesVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblDelChargesVal",
        top: "5",
        left: "138",
        text: "$0"
    });
    $.__views.delCharges.add($.__views.lblDelChargesVal);
    $.__views.couponsInfo = Ti.UI.createView({
        id: "couponsInfo",
        top: "3",
        backgroundImage: "/images/optionsviewbkg.png",
        width: "310",
        height: "0.1",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.couponsInfo);
    $.__views.lblDiscount = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblDiscount",
        top: "5",
        left: "3",
        text: "Coupons Applied",
        textAlign: "left"
    });
    $.__views.couponsInfo.add($.__views.lblDiscount);
    $.__views.couponsTable = Ti.UI.createTableView({
        id: "couponsTable",
        top: "3",
        height: "0.1",
        borderWidth: "1",
        borderRadius: "10",
        borderColor: "#806754",
        width: "310",
        allowsSelection: "false"
    });
    $.__views.contentView.add($.__views.couponsTable);
    $.__views.estTaxes = Ti.UI.createView({
        id: "estTaxes",
        top: "3",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "310",
        height: "30",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.estTaxes);
    $.__views.lblTaxText = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblTaxText",
        top: "5",
        left: "3",
        text: "Estimated Taxes:",
        textAlign: "left"
    });
    $.__views.estTaxes.add($.__views.lblTaxText);
    $.__views.lblTaxVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblTaxVal",
        top: "5",
        left: "142",
        text: "$2.30"
    });
    $.__views.estTaxes.add($.__views.lblTaxVal);
    $.__views.totalView = Ti.UI.createView({
        id: "totalView",
        top: "7",
        backgroundImage: "/aimages/optionsviewbkg.png",
        width: "310",
        height: "30",
        layout: "horizontal"
    });
    $.__views.contentView.add($.__views.totalView);
    $.__views.lblTotalText = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblTotalText",
        top: "5",
        left: "3",
        text: "Total:",
        textAlign: "left"
    });
    $.__views.totalView.add($.__views.lblTotalText);
    $.__views.lblTotalVal = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#79b622",
        height: Ti.UI.SIZE,
        id: "lblTotalVal",
        top: "5",
        left: "215"
    });
    $.__views.totalView.add($.__views.lblTotalVal);
    $.__views.paymentOptions = Ti.UI.createView({
        id: "paymentOptions",
        top: "10",
        width: "310",
        height: "30",
        layout: "horizontal",
        backgroundImage: "/aimages/optionsviewbkg.png",
        borderRadius: "10",
        borderColor: "blue",
        borderWidth: "1"
    });
    $.__views.contentView.add($.__views.paymentOptions);
    $.__views.btnCash = Ti.UI.createButton({
        height: Ti.UI.SIZE,
        width: 102,
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
        width: 102,
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
        width: 102,
        title: "Paypal",
        color: "black",
        backgroundColor: "#fff",
        id: "btnPaypal"
    });
    $.__views.paymentOptions.add($.__views.btnPaypal);
    $.__views.btnApplyCoupon = Ti.UI.createButton({
        id: "btnApplyCoupon",
        backgroundImage: "/aimages/btnapplycoupon.png",
        top: "15",
        bottom: "2",
        width: "120",
        height: "40"
    });
    $.__views.contentView.add($.__views.btnApplyCoupon);
    $.__views.btnPlaceOrder = Ti.UI.createButton({
        id: "btnPlaceOrder",
        backgroundImage: "/aimages/btnplaceorderbkg.png",
        top: "15",
        bottom: "2",
        width: "120",
        height: "40"
    });
    $.__views.contentView.add($.__views.btnPlaceOrder);
    exports.destroy = function() {
        __alloyId75.off("fetch destroy change add remove reset", __alloyId76);
        __alloyId96.off("fetch destroy change add remove reset", __alloyId97);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var osname = "android";
    var orderData = Alloy.Models.instance("Order");
    var roundNumber = Alloy.Globals.roundNumber;
    var roundNumber = function(number, digits) {
        multiple = Math.pow(10, digits);
        rndedNum = Math.round(number * multiple) / multiple;
        return rndedNum;
    };
    var user = Alloy.Models.instance("user");
    $.lblSubtotalVal.text = "$" + orderData.get("SubTotal");
    orderTotal = roundNumber(orderData.get("SubTotal") + 2.3, 2);
    orderData.set("Total", orderTotal);
    $.lblTotalVal.text = "$" + orderTotal;
    var optionsCol = Alloy.Collections.OptionalItem;
    optionsCol.fetch();
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
                    var optionalItem = optionsCol.at(e.index);
                    orderData.set("Total", roundNumber(orderData.get("Total") + optionalItem.get("Price"), 2));
                    $.lblTotalVal.text = "$" + orderData.get("Total");
                    orderData.set("OptionsTotal", roundNumber(orderData.get("OptionsTotal") + optionalItem.get("Price"), 2));
                    $.lblOptChargesVal.text = "$" + orderData.get("OptionsTotal");
                } else if ("/images/chkboxchecked.png" == chkbox.backgroundImage) {
                    chkbox.backgroundImage = "/images/chkboxunchecked.png";
                    optChargeCnt--;
                    var optionalItem = optionsCol.at(e.index);
                    orderData.set("Total", roundNumber(orderData.get("Total") - optionalItem.get("Price"), 2));
                    $.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"), 2);
                    orderData.set("OptionsTotal", roundNumber(orderData.get("OptionsTotal") - optionalItem.get("Price"), 2));
                    $.lblOptChargesVal.text = "$" + orderData.get("OptionsTotal");
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
                orderData.set("DeliveryCharge", 1.99);
                orderData.set("OrderType", "Delivery");
                orderData.set("Total", roundNumber(orderData.get("DeliveryCharge") + orderData.get("Total"), 2));
            } else if (delChargesAdded) {
                orderData.set("DeliveryCharge", 0);
                0 === e.index ? orderData.set("OrderType", "Carry Out") : orderData.set("OrderType", "Eat Here");
                orderData.set("Total", roundNumber(orderData.get("Total") - orderData.get("DeliveryCharge"), 2));
                $.delCharges.animate({
                    duration: 200,
                    height: "0.01",
                    curve: Ti.UI.ANIMATION_CURVE_LINEAR
                });
                delChargesAdded = false;
            }
        });
    } else if ("android" === osname) {
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
                        height: "30dp"
                    });
                    optChargeCnt++;
                    var optionalItem = optionsCol.at(e.index);
                    orderData.set("Total", roundNumber(orderData.get("Total") + optionalItem.get("Price"), 2));
                    $.lblTotalVal.text = "$" + orderData.get("Total");
                    orderData.set("OptionsTotal", roundNumber(orderData.get("OptionsTotal") + optionalItem.get("Price"), 2));
                    $.lblOptChargesVal.text = "$" + orderData.get("OptionsTotal");
                } else if ("/aimages/chkboxchecked.png" == chkbox.backgroundImage) {
                    chkbox.backgroundImage = "/aimages/chkboxunchecked.png";
                    optChargeCnt--;
                    var optionalItem = optionsCol.at(e.index);
                    orderData.set("Total", roundNumber(orderData.get("Total") - optionalItem.get("Price"), 2));
                    $.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"), 2);
                    orderData.set("OptionsTotal", roundNumber(orderData.get("OptionsTotal") - optionalItem.get("Price"), 2));
                    $.lblOptChargesVal.text = "$" + orderData.get("OptionsTotal");
                    0 >= optChargeCnt && $.optionalCharges.animate({
                        duration: 200,
                        height: "0.1"
                    });
                }
            }
        });
        var movelabel = {
            top: "15dp",
            duration: 1e3
        };
        var collapsed = true;
        var delChargesAdded = false;
        $.btnDelivery.addEventListener("click", function() {
            $.delCharges.animate({
                duration: 200,
                height: "30dp"
            });
            $.btnCarryOut.backgroundColor = "#fff";
            $.btnEathere.backgroundColor = "#fff";
            $.btnDelivery.backgroundColor = "blue";
            $.lblDelChargesVal.text = "$1.99";
            orderData.set("DeliveryCharge", 1.99);
            orderData.set("OrderType", "Delivery");
            orderData.set("Total", roundNumber(orderData.get("DeliveryCharge") + orderData.get("Total"), 2));
            $.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"), 2);
        });
        $.btnCarryOut.addEventListener("click", function() {
            $.btnCarryOut.backgroundColor = "blue";
            $.btnEathere.backgroundColor = "#fff";
            $.btnDelivery.backgroundColor = "#fff";
            $.delCharges.animate({
                duration: 200,
                height: "0.01"
            });
            orderData.set("Total", roundNumber(orderData.get("Total") - orderData.get("DeliveryCharge"), 2));
            $.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"), 2);
            orderData.set("DeliveryCharge", 0);
            orderData.set("OrderType", "Carry Out");
        });
        $.btnEathere.addEventListener("click", function() {
            $.btnCarryOut.backgroundColor = "#fff";
            $.btnEathere.backgroundColor = "blue";
            $.btnDelivery.backgroundColor = "#fff";
            $.delCharges.animate({
                duration: 200,
                height: "0.01"
            });
            orderData.set("Total", roundNumber(orderData.get("Total") - orderData.get("DeliveryCharge"), 2));
            $.lblTotalVal.text = "$" + roundNumber(orderData.get("Total"), 2);
            orderData.set("DeliveryCharge", 0);
            orderData.set("OrderType", "Eat Here");
        });
        $.btnCash.addEventListener("click", function() {
            $.btnCash.backgroundColor = "blue";
            $.btnCreditCard.backgroundColor = "#fff";
            $.btnPaypal.backgroundColor = "#fff";
            $.btnPlaceOrder.addEventListener("click", function() {
                var order = Alloy.Models.instance("Order");
                order.set("OrderId", 10);
                var total = roundNumber(orderData.get("Total"), 2);
                order.set("Total", total);
                if ("iphone" == osname || "ipad" == osname) {
                    var cInfoWnd = Alloy.createController("cashInfo").getView();
                    navWnd.openWindow(cInfoWnd, {
                        animated: true
                    });
                } else if ("android" === osname) {
                    var cInfoWnd = Alloy.createController("cashInfo").getView();
                    cInfoWnd.open();
                }
            });
        });
        $.btnCreditCard.addEventListener("click", function() {
            $.btnCreditCard.backgroundColor = "blue";
            $.btnCash.backgroundColor = "#fff";
            $.btnPaypal.backgroundColor = "#fff";
            $.btnPlaceOrder.addEventListener("click", function() {
                if ("iphone" == osname || "ipad" == osname) {
                    var ccInfoWnd = Alloy.createController("creditcardinfo").getView();
                    navWnd.openWindow(ccInfoWnd, {
                        animated: true
                    });
                } else if ("android" === osname) {
                    var ccInfoWnd = Alloy.createController("creditcardinfo").getView();
                    ccInfoWnd.open();
                }
            });
        });
        $.btnPaypal.addEventListener("click", function() {
            $.btnPaypal.backgroundColor = "blue";
            $.btnCash.backgroundColor = "#fff";
            $.btnCreditCard.backgroundColor = "#fff";
        });
    }
    $.orderWnd.addEventListener("focus", function() {
        Ti.App.removeEventListener("applycoupon", applyCouponListener);
    });
    var appliedCoupons = [];
    $.btnApplyCoupon.addEventListener("click", function() {
        Ti.App.addEventListener("applycoupon", applyCouponListener);
        if ("iphone" == osname || "ipad" == osname) {
            var myCouponsWnd = Alloy.createController("mycoupons").getView();
            navWnd.openWindow(myCouponsWnd, {
                animated: true
            });
        } else if ("android" === osname) {
            var myCouponsWnd = Alloy.createController("mycoupons").getView();
            myCouponsWnd.open();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;