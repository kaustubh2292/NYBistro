function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "coupons";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.couponswnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "couponswnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.couponswnd && $.addTopLevelView($.__views.couponswnd);
    $.__views.theTable = Ti.UI.createTableView({
        id: "theTable"
    });
    $.__views.couponswnd.add($.__views.theTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    if ("iphone" === osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backtohomebtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        var myCouponsBtn = Ti.UI.createButton({
            height: 26,
            width: 75,
            title: "My Coupons",
            textAlign: "TEXT_ALIGNMENT_CENTER",
            font: {
                fontFamily: "Arial",
                fontSize: 11,
                fontWeight: "bold"
            },
            color: "#ebbca3",
            backgroundImage: "/images/mycouponsbkg.png"
        });
        $.couponswnd.setLeftNavButton(backButton);
        $.couponswnd.setRightNavButton(myCouponsBtn);
        $.couponswnd.setBarImage("/images/couponsbarbkg.png");
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.couponswnd);
        });
        myCouponsBtn.addEventListener("click", function() {
            var myCouponsWnd = Alloy.createController("mycoupons").getView();
            navWnd.openWindow(myCouponsWnd, {
                animated: true
            });
        });
    }
    var tbldata = [];
    for (var i = 0; 8 > i; i++) {
        var row = Alloy.createController("couponrow", {
            primaryLabel: "This is coupon " + i,
            subTitle: "Lorem ipsum doler.. " + i,
            rownum: i
        }).getView();
        tbldata.push(row);
    }
    tbldata.push(Alloy.createController("couponrow", {
        primaryLabel: "This is the last row",
        subTitle: "The last subtitle ",
        rownum: "last"
    }).getView());
    $.theTable.data = tbldata;
    $.theTable.addEventListener("click", function() {
        if ("iphone" === osname) {
            var couponDetailsWnd = Alloy.createController("coupondetails", {
                action: "download"
            }).getView();
            navWnd.openWindow(couponDetailsWnd, {
                animated: true
            });
        } else if ("android" === osname) {
            var couponDetailsWnd = Alloy.createController("coupondetails", {
                action: "download"
            }).getView();
            couponDetailsWnd.open();
        }
    });
    if ("android" === osname) {
        $.couponswnd.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.couponswnd.getActivity().actionBar;
                actionBar.setTitle("");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/couponsbarbkg.png");
                actionBar.setIcon("/aimages/arrowbutton.png");
                actionBar.onHomeIconItemSelected = function() {
                    $.couponswnd.close();
                };
            }
        });
        var activity = $.couponswnd.activity;
        activity.onCreateOptionsMenu = function(e) {
            var menu = e.menu;
            var addMenuItem = menu.add({
                title: "My Coupons",
                font: {
                    fontFamily: "Arial",
                    fontSize: 15,
                    fontWeight: "bold"
                },
                color: "#D0ec9b",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            });
            addMenuItem.addEventListener("click", function() {
                var mycoupondetailsWin = Alloy.createController("mycoupons").getView();
                mycoupondetailsWin.open();
            });
        };
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;