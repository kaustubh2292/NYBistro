function Controller() {
    function dataTransformation(_model) {
        var json = _model.toJSON();
        json.Price = "$" + json.Price;
        return json;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "itemdetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.menuItemDetails = Alloy.createModel("MenuItem");
    $.__views.winItemDetails = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winItemDetails",
        model: "$.menuItemDetails",
        dataTransform: "dataTransformation",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.winItemDetails && $.addTopLevelView($.__views.winItemDetails);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showshowHorizontalScrollIndicator: "false",
        width: "100%",
        height: "100%"
    });
    $.__views.winItemDetails.add($.__views.scrollView);
    $.__views.containerView = Ti.UI.createView({
        id: "containerView",
        backgroundColor: "white",
        height: "100%",
        width: "100%"
    });
    $.__views.scrollView.add($.__views.containerView);
    $.__views.foodBkg = Ti.UI.createImageView({
        id: "foodBkg",
        image: "/aimages/detailfoodimgbkg.png",
        width: "580",
        height: "230",
        top: "0"
    });
    $.__views.containerView.add($.__views.foodBkg);
    $.__views.imgFood = Ti.UI.createImageView({
        id: "imgFood",
        image: "/aimages/detailsfoodimage.png",
        width: "330",
        height: "210",
        top: "10"
    });
    $.__views.containerView.add($.__views.imgFood);
    $.__views.contentBkg = Ti.UI.createImageView({
        id: "contentBkg",
        image: "/aimages/profilebg.png",
        width: "580",
        height: "60",
        top: "230"
    });
    $.__views.containerView.add($.__views.contentBkg);
    $.__views.lblPrice = Ti.UI.createLabel({
        backgroundImage: "/aimages/pricebutton.png",
        height: 30,
        width: 60,
        top: 240,
        right: 15,
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "white",
        textAlign: "center",
        id: "lblPrice"
    });
    $.__views.containerView.add($.__views.lblPrice);
    $.__views.lblFoodName = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblFoodName",
        top: "235",
        left: "60"
    });
    $.__views.containerView.add($.__views.lblFoodName);
    $.__views.smallFoodImg = Ti.UI.createImageView({
        id: "smallFoodImg",
        image: "/aimages/item1.png",
        width: "50",
        height: "50",
        top: "235",
        left: "5"
    });
    $.__views.containerView.add($.__views.smallFoodImg);
    $.__views.lblDesc = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 9,
            fontWeight: "normal"
        },
        color: "#806754",
        width: 150,
        top: 250,
        left: 65,
        height: Ti.UI.SIZE,
        id: "lblDesc"
    });
    $.__views.containerView.add($.__views.lblDesc);
    $.__views.lblQntyLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblQntyLabel",
        text: "Quantity:",
        top: "306",
        left: "5"
    });
    $.__views.containerView.add($.__views.lblQntyLabel);
    $.__views.lblQtyNum = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        top: 295,
        left: 60,
        width: 30,
        height: 40,
        backgroundImage: "/aimages/qtybkg.png",
        color: "#806754",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "lblQtyNum",
        text: "1"
    });
    $.__views.containerView.add($.__views.lblQtyNum);
    $.__views.btnAdd = Ti.UI.createButton({
        id: "btnAdd",
        backgroundImage: "/aimages/qtyadditionbkg.png",
        top: "295",
        left: "90",
        height: "20",
        width: "30"
    });
    $.__views.containerView.add($.__views.btnAdd);
    $.__views.btnSub = Ti.UI.createButton({
        id: "btnSub",
        backgroundImage: "/aimages/qtysubtractionbkg.png",
        top: "315",
        left: "90",
        height: "20",
        width: "30"
    });
    $.__views.containerView.add($.__views.btnSub);
    $.__views.btnAddtoCart = Ti.UI.createButton({
        id: "btnAddtoCart",
        backgroundImage: "/aimages/addbutton.png",
        top: "295",
        left: "130",
        height: "40",
        width: "60"
    });
    $.__views.containerView.add($.__views.btnAddtoCart);
    $.__views.lblSplInstruct = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 12,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblSplInstruct",
        text: "Specific Instructions (If Any):",
        top: "345",
        left: "7"
    });
    $.__views.containerView.add($.__views.lblSplInstruct);
    $.__views.txtSpecInstruct = Ti.UI.createTextArea({
        id: "txtSpecInstruct",
        backgroundImage: "/aimages/specificinstrbkg.png",
        color: "black",
        height: "150",
        width: "300",
        top: "360",
        left: "5",
        borderRadius: "5",
        borderWidth: "1",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN
    });
    $.__views.containerView.add($.__views.txtSpecInstruct);
    var __alloyId38 = function() {
        $.lblPrice.text = _.isFunction($.menuItemDetails.transform) ? $.menuItemDetails.transform()["Price"] : $.menuItemDetails.get("Price");
        $.lblPrice.text = _.isFunction($.menuItemDetails.transform) ? $.menuItemDetails.transform()["Price"] : $.menuItemDetails.get("Price");
        $.lblFoodName.text = _.isFunction($.menuItemDetails.transform) ? $.menuItemDetails.transform()["Name"] : $.menuItemDetails.get("Name");
        $.lblFoodName.text = _.isFunction($.menuItemDetails.transform) ? $.menuItemDetails.transform()["Name"] : $.menuItemDetails.get("Name");
        $.lblDesc.text = _.isFunction($.menuItemDetails.transform) ? $.menuItemDetails.transform()["Description"] : $.menuItemDetails.get("Description");
        $.lblDesc.text = _.isFunction($.menuItemDetails.transform) ? $.menuItemDetails.transform()["Description"] : $.menuItemDetails.get("Description");
    };
    $.menuItemDetails.on("fetch change destroy", __alloyId38);
    exports.destroy = function() {
        $.menuItemDetails.off("fetch change destroy", __alloyId38);
    };
    _.extend($, $.__views);
    var osname = "android";
    var args = arguments[0] || {};
    var item = args.itemdata;
    if ("iphone" === osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backbtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.winItemDetails);
        });
        var addButton = Ti.UI.createButton({
            height: 26,
            width: 55,
            backgroundImage: "/images/addbtn.png"
        });
        addButton.addEventListener("click", function() {
            var shoppingCart = Alloy.createModel("ShoppingCart", {
                ItemName: $.lblFoodName.text,
                ItemPrice: $.menuItemDetails.get("Price"),
                Quantity: Number($.lblQtyNum.text),
                Total: Number($.lblQtyNum.text) * $.menuItemDetails.get("Price")
            });
            shoppingCart.save();
            alert("Item added to your cart");
            var shoppingCartItems = Alloy.Collections.instance("ShoppingCart");
            shoppingCartItems.add(shoppingCart);
        });
        $.winItemDetails.setLeftNavButton(backButton);
        $.winItemDetails.setRightNavButton(addButton);
        $.winItemDetails.setBarImage("/images/itemdetailsbkg.png");
        $.btnAdd.addEventListener("click", function() {
            $.lblQtyNum.text = Number($.lblQtyNum.text) + 1;
        });
        $.btnSub.addEventListener("click", function() {
            Number($.lblQtyNum.text) > 0 && ($.lblQtyNum.text = Number($.lblQtyNum.text) - 1);
        });
    } else if ("android" === osname) {
        $.winItemDetails.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.winItemDetails.getActivity().actionBar;
                actionBar.setTitle("ITEM DETAILS");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/toolbarbg.png");
                actionBar.setIcon("/aimages/backbtn.png");
                actionBar.onHomeIconItemSelected = function() {
                    $.winItemDetails.close();
                };
            }
        });
        var activity = $.winItemDetails.activity;
        activity.onCreateOptionsMenu = function(e) {
            var menu = e.menu;
            var opencartIcon = menu.add({
                title: "Open cart",
                icon: "aimages/cart.png",
                height: 70,
                width: 70,
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS
            });
            opencartIcon.addEventListener("click", function() {
                var wndcart = Alloy.createController("shoppingcart").getView();
                wndcart.open();
            });
        };
        $.btnAddtoCart.addEventListener("click", function() {
            var shoppingCart = Alloy.createModel("ShoppingCart", {
                ItemName: $.lblFoodName.text,
                ItemPrice: $.menuItemDetails.get("Price"),
                Quantity: Number($.lblQtyNum.text),
                Total: Number($.lblQtyNum.text) * $.menuItemDetails.get("Price")
            });
            shoppingCart.save();
            alert("Item added to your cart");
        });
        $.btnAdd.addEventListener("click", function() {
            $.lblQtyNum.text = Number($.lblQtyNum.text) + 1;
        });
        $.btnSub.addEventListener("click", function() {
            Number($.lblQtyNum.text) > 0 && ($.lblQtyNum.text = Number($.lblQtyNum.text) - 1);
        });
        $.lblPrice.text = "$24.00";
        var first = true;
        $.txtSpecInstruct.addEventListener("focus", function f() {
            if (first) {
                first = false;
                $.txtSpecInstruct.blur();
            } else $.txtSpecInstruct.removeEventListener("focus", f);
        });
    }
    $.menuItemDetails = _.extend({}, $.menuItemDetails, {
        transform: function() {
            return dataTransformation(this);
        }
    });
    $.menuItemDetails.set(item.attributes);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;