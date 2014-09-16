function Controller() {
    function __alloyId62(e) {
        if (e && e.fromAdapter) return;
        __alloyId62.opts || {};
        var models = __alloyId61.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId58 = models[i];
            __alloyId58.__transform = transformFunction(__alloyId58);
            var __alloyId60 = Alloy.createController("mycouponrow", {
                $model: __alloyId58,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId60.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function __alloyId67(e) {
        if (e && e.fromAdapter) return;
        __alloyId67.opts || {};
        var models = __alloyId66.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId63 = models[i];
            __alloyId63.__transform = transformFunction(__alloyId63);
            var __alloyId65 = Alloy.createController("mycouponrow", {
                $model: __alloyId63,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId65.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        if ("Loyalty" === model.get("CouponType")) {
            model.set("Status", "downloaded");
            transform.CouponImage = "images/loyaltycoupontag.png";
        }
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mycoupons";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("CouponLocal");
    var __alloyId61;
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
    var __alloyId66 = Alloy.Collections["CouponLocal"] || CouponLocal;
    __alloyId66.on("fetch destroy change add remove reset", __alloyId67);
    exports.destroy = function() {
        __alloyId61.off("fetch destroy change add remove reset", __alloyId62);
        __alloyId66.off("fetch destroy change add remove reset", __alloyId67);
    };
    _.extend($, $.__views);
    var osname = "android";
    var myCoupons = Alloy.Collections.CouponLocal;
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
    $.theTable.addEventListener("click", function(e) {
        var localcoupon = myCoupons.at(e.index);
        if ("iphone" == osname || "ipad" == osname) {
            var couponDetailsWnd = Alloy.createController("coupondetails", {
                coupondata: localcoupon
            }).getView();
            navWnd.openWindow(couponDetailsWnd, {
                animated: true
            });
        } else if ("android" === osname) {
            var couponDetailsWnd = Alloy.createController("coupondetails", {
                coupondata: localcoupon
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
    myCoupons.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;