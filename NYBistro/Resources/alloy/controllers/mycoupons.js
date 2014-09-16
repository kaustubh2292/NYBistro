function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mycoupons";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.myCouponsWin = Ti.UI.createWindow({
        id: "myCouponsWin",
        backgroundColor: "white",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.myCouponsWin && $.addTopLevelView($.__views.myCouponsWin);
    $.__views.theTable = Ti.UI.createTableView({
        id: "theTable"
    });
    $.__views.myCouponsWin.add($.__views.theTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backtocoupons.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        $.myCouponsWin.setLeftNavButton(backButton);
        $.myCouponsWin.setBarImage("/images/mycouponsbarbkg.png");
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.myCouponsWin);
        });
    }
    var tbldata = [];
    for (var i = 0; 8 > i; i++) {
        var row = Alloy.createController("mycouponrow", {
            primaryLabel: "This is coupon " + i,
            subTitle: "Lorem ipsum doler.. " + i,
            rownum: i
        }).getView();
        tbldata.push(row);
    }
    tbldata.push(Alloy.createController("mycouponrow", {
        primaryLabel: "This is the last row",
        subTitle: "The last subtitle ",
        rownum: "last"
    }).getView());
    $.theTable.data = tbldata;
    $.theTable.addEventListener("click", function() {
        if ("iphone" == osname || "ipad" == osname) {
            var couponDetailsWnd = Alloy.createController("coupondetails", {
                action: "redeem"
            }).getView();
            navWnd.openWindow(couponDetailsWnd, {
                animated: true
            });
        } else if ("android" === osname) {
            alert("hi coupondetail");
            var couponDetailsWnd = Alloy.createController("coupondetails", {
                action: "redeem"
            }).getView();
            couponDetailsWnd.open();
        }
    });
    "android" === osname && $.myCouponsWin.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.myCouponsWin.getActivity().actionBar;
            actionBar.setTitle("MY COUPONS");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/toolbarbg.png");
            actionBar.setIcon("/aimages/couponbutton.png");
            actionBar.onHomeIconItemSelected = function() {
                $.myCouponsWin.close();
            };
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;