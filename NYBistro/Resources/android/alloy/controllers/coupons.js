function Controller() {
    function __alloyId21(e) {
        if (e && e.fromAdapter) return;
        __alloyId21.opts || {};
        var models = __alloyId20.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId17 = models[i];
            __alloyId17.__transform = transformFunction(__alloyId17);
            var __alloyId19 = Alloy.createController("couponrow", {
                $model: __alloyId17,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId19.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function __alloyId26(e) {
        if (e && e.fromAdapter) return;
        __alloyId26.opts || {};
        var models = __alloyId25.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId22 = models[i];
            __alloyId22.__transform = transformandroiFunction(__alloyId22);
            var __alloyId24 = Alloy.createController("couponrow", {
                $model: __alloyId22,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId24.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        if (_.indexOf(downloadedCouponIds, model.get("CouponId")) > -1) {
            model.set("Status", "downloaded");
            transform.CouponImage = "images/downloadedcoupon.png";
            transform.ArrowImage = "images/arrowbrown.png";
        } else {
            model.set("Status", "new");
            transform.CouponImage = "images/newcoupon.png";
            transform.ArrowImage = "images/arrowgreen.png";
        }
        return transform;
    }
    function transformandroiFunction(model) {
        var transform = model.toJSON();
        if (_.indexOf(downloadedCouponIds, model.get("CouponId")) > -1) {
            model.set("Status", "downloaded");
            transform.CouponImage = "/aimages/downloadcoupon.png";
            transform.ArrowImage = "/aimages/arrow1.png";
        } else {
            model.set("Status", "new");
            transform.CouponImage = "/aimages/newcoupon.png";
            transform.ArrowImage = "/aimages/arrowgreen.png";
        }
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "coupons";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Coupon");
    var __alloyId20;
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
    var __alloyId25 = Alloy.Collections["Coupon"] || Coupon;
    __alloyId25.on("fetch destroy change add remove reset", __alloyId26);
    exports.destroy = function() {
        __alloyId20.off("fetch destroy change add remove reset", __alloyId21);
        __alloyId25.off("fetch destroy change add remove reset", __alloyId26);
    };
    _.extend($, $.__views);
    var osname = "android";
    var couponsCol = Alloy.Collections.Coupon;
    var downloadedCoupons = Alloy.createCollection("CouponLocal");
    if (null != downloadedCoupons) {
        downloadedCoupons.fetch({
            query: "SELECT * FROM CouponLocal"
        });
        var downloadedCouponIds = [];
        for (var i = 0; downloadedCoupons.length > i; i++) downloadedCouponIds.push(downloadedCoupons.at(i).get("CouponId"));
    }
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
    $.theTable.addEventListener("click", function(e) {
        var coupon = couponsCol.at(e.index);
        Ti.API.info("Image url" + coupon.CouponImage);
        if ("iphone" === osname) {
            var couponDetailsWnd = Alloy.createController("coupondetails", {
                coupondata: coupon
            }).getView();
            navWnd.openWindow(couponDetailsWnd, {
                animated: true
            });
        } else if ("android" === osname) {
            var couponDetailsWnd = Alloy.createController("coupondetails", {
                coupondata: coupon
            }).getView();
            couponDetailsWnd.open();
        }
    });
    $.couponswnd.addEventListener("focus", function() {});
    $.couponswnd.addEventListener("blur", function() {});
    couponsCol.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;