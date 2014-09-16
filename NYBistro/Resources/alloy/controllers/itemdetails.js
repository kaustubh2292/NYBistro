function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "itemdetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winItemDetails = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "winItemDetails",
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
        height: "370",
        top: "0"
    });
    $.__views.containerView.add($.__views.foodBkg);
    $.__views.imgFood = Ti.UI.createImageView({
        id: "imgFood",
        image: "/aimages/detailsfoodimage.png",
        width: "470",
        height: "340",
        top: "10"
    });
    $.__views.containerView.add($.__views.imgFood);
    $.__views.contentBkg = Ti.UI.createImageView({
        id: "contentBkg",
        image: "/aimages/profilebg.png",
        width: "580",
        height: "95",
        top: "370"
    });
    $.__views.containerView.add($.__views.contentBkg);
    $.__views.lblPrice = Ti.UI.createLabel({
        backgroundImage: "/aimages/pricebutton.png",
        height: 46,
        width: 119,
        top: 386,
        right: 70,
        font: {
            fontSize: 15,
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
            fontSize: 17,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblFoodName",
        text: "Food Name",
        top: "381",
        left: "70"
    });
    $.__views.containerView.add($.__views.lblFoodName);
    $.__views.smallFoodImg = Ti.UI.createImageView({
        id: "smallFoodImg",
        image: "/aimages/item1.png",
        width: "60",
        height: "60",
        top: "381",
        left: "7"
    });
    $.__views.containerView.add($.__views.smallFoodImg);
    $.__views.lblDesc = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 13,
            fontWeight: "normal"
        },
        color: "#806754",
        width: 170,
        top: 400,
        left: 70,
        height: Ti.UI.SIZE,
        id: "lblDesc",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    });
    $.__views.containerView.add($.__views.lblDesc);
    $.__views.lblQntyLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 17,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblQntyLabel",
        text: "Quantity:",
        top: "510",
        left: "7"
    });
    $.__views.containerView.add($.__views.lblQntyLabel);
    $.__views.lblQtyNum = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 12,
            fontWeight: "bold"
        },
        top: 496,
        left: 90,
        width: 51,
        height: 50,
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
        top: "496",
        left: "130",
        height: "25",
        width: "40"
    });
    $.__views.containerView.add($.__views.btnAdd);
    $.__views.btnSub = Ti.UI.createButton({
        id: "btnSub",
        backgroundImage: "/aimages/qtysubtractionbkg.png",
        top: "521",
        left: "130",
        height: "25",
        width: "40"
    });
    $.__views.containerView.add($.__views.btnSub);
    $.__views.lblSplInstruct = Ti.UI.createLabel({
        font: {
            fontFamily: "Arial",
            fontSize: 15,
            fontWeight: "bold"
        },
        color: "#a4451c",
        height: Ti.UI.SIZE,
        id: "lblSplInstruct",
        text: "Specific Instructions (If Any):",
        top: "560",
        left: "7"
    });
    $.__views.containerView.add($.__views.lblSplInstruct);
    $.__views.txtSpecInstruct = Ti.UI.createTextArea({
        id: "txtSpecInstruct",
        backgroundImage: "/aimages/specificinstrbkg.png",
        color: "black",
        height: "223",
        width: "470",
        top: "580",
        left: "7",
        borderRadius: "5",
        borderWidth: "1",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN
    });
    $.__views.containerView.add($.__views.txtSpecInstruct);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
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
            alert("add to cart clicked");
        });
        $.winItemDetails.setLeftNavButton(backButton);
        $.winItemDetails.setRightNavButton(addButton);
        $.winItemDetails.setBarImage("/images/itemdetailsbkg.png");
        $.btnAdd.addEventListener("click", function() {
            $.lblQtyNum.text = Number($.lblQtyNum.text) + 1;
        });
        $.btnSub.addEventListener("click", function() {
            $.lblQtyNum.text = Number($.lblQtyNum.text) - 1;
        });
    } else if ("android" === osname) {
        $.winItemDetails.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.winItemDetails.getActivity().actionBar;
                actionBar.setTitle("ITEM DETAILS");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/toolbarbg.png");
                actionBar.setIcon("/aimages/arrowbutton.png");
                actionBar.onHomeIconItemSelected = function() {
                    var homeWin = Alloy.createController("index").getView();
                    homeWin.open();
                    $.winItemDetails.close();
                };
            }
        });
        var activity = $.winItemDetails.activity;
        activity.onCreateOptionsMenu = function(e) {
            var menu = e.menu;
            var addMenuItem = menu.add({
                icon: "aimages/addbutton.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            });
            addMenuItem.addEventListener("click", function() {
                alert("add to cart clicked");
            });
        };
        $.btnAdd.addEventListener("click", function() {
            $.lblQtyNum.text = Number($.lblQtyNum.text) + 1;
        });
        $.btnSub.addEventListener("click", function() {
            $.lblQtyNum.text = Number($.lblQtyNum.text) - 1;
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;