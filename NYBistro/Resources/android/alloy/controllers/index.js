function Controller() {
    function doClick() {
        Titanium.API.info("You clicked the button");
    }
    function menuClicked() {
        if ("iphone" === osname || "ipad" == osname) {
            var wndmenu = Alloy.createController("menu").getView();
            $.homeWin.openWindow(wndmenu, {
                animated: true
            });
        } else if ("android" === osname) {
            var wndmenu = Alloy.createController("menu").getView();
            wndmenu.open();
        }
    }
    function mapClicked() {
        if ("iphone" === osname || "ipad" == osname) {
            var wndmap = Alloy.createController("map").getView();
            $.homeWin.openWindow(wndmap, {
                animated: true
            });
        } else "android" === osname && showRoute();
    }
    function showRoute() {
        Titanium.Geolocation.purpose = "Recieve User Location";
        Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
        Titanium.Geolocation.distanceFilter = 10;
        var source = "kaspate vasti, wakad, pune";
        var destination = "shivajinagar, pune";
        Ti.Platform.openURL("http://maps.google.com/maps?t=m&saddr=" + source + "&daddr=" + destination);
    }
    function cartClicked() {
        if ("iphone" === osname || "ipad" === osname) {
            var wndcart = Alloy.createController("shoppingcart").getView();
            $.homeWin.openWindow(wndcart, {
                animated: true
            });
        } else if ("android" === osname) {
            var wndcart = Alloy.createController("shoppingcart").getView();
            wndcart.open();
        }
    }
    function addUserClicked() {
        if ("iphone" === osname || "ipad" == osname) {
            var wnduser = Alloy.createController("login").getView();
            $.homeWin.openWindow(wnduser, {
                animated: true
            });
        } else if ("android" === osname) {
            var wnduser = Alloy.createController("login").getView();
            wnduser.open();
        }
    }
    function reservationClicked() {
        if ("iphone" === osname || "ipad" == osname) {
            var wndreserve = Alloy.createController("reservation").getView();
            $.homeWin.openWindow(wndreserve, {
                animated: true
            });
        } else if ("android" === osname) {
            var wndreserve = Alloy.createController("reservation").getView();
            wndreserve.open();
        }
    }
    function couponsClicked() {
        if ("iphone" === osname || "ipad" == osname) {
            var wndcoupons = Alloy.createController("coupons").getView();
            $.homeWin.openWindow(wndcoupons, {
                animated: true
            });
        } else if ("android" === osname) {
            var wndcoupon = Alloy.createController("coupons").getView();
            wndcoupon.open();
        }
    }
    function moreClicked() {
        if ("iphone" === osname || "ipad" == osname) {
            var wndmore = Alloy.createController("more").getView();
            $.homeWin.openWindow(wndmore, {
                animated: true
            });
        } else if ("android" === osname) {
            var wndmore = Alloy.createController("more").getView();
            wndmore.open();
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.homeWin = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "homeWin",
        backgroundImage: "/images/homebg.png",
        exitOnClose: "true",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.homeWin && $.addTopLevelView($.__views.homeWin);
    $.__views.btnHome = Ti.UI.createButton({
        width: "80",
        height: "70",
        id: "btnHome",
        backgroundImage: "/aimages/home.png",
        left: "4%",
        top: "70%"
    });
    $.__views.homeWin.add($.__views.btnHome);
    doClick ? $.__views.btnHome.addEventListener("click", doClick) : __defers["$.__views.btnHome!click!doClick"] = true;
    $.__views.btnMenu = Ti.UI.createButton({
        width: "80",
        height: "70",
        id: "btnMenu",
        backgroundImage: "/aimages/menu.png",
        left: "28%",
        top: "70%"
    });
    $.__views.homeWin.add($.__views.btnMenu);
    menuClicked ? $.__views.btnMenu.addEventListener("click", menuClicked) : __defers["$.__views.btnMenu!click!menuClicked"] = true;
    $.__views.btnMap = Ti.UI.createButton({
        width: "80",
        height: "70",
        id: "btnMap",
        backgroundImage: "/aimages/map.png",
        left: "52%",
        top: "70%"
    });
    $.__views.homeWin.add($.__views.btnMap);
    mapClicked ? $.__views.btnMap.addEventListener("click", mapClicked) : __defers["$.__views.btnMap!click!mapClicked"] = true;
    $.__views.btnCart = Ti.UI.createButton({
        width: "80",
        height: "70",
        id: "btnCart",
        backgroundImage: "/aimages/cart.png",
        left: "76%",
        top: "70%"
    });
    $.__views.homeWin.add($.__views.btnCart);
    cartClicked ? $.__views.btnCart.addEventListener("click", cartClicked) : __defers["$.__views.btnCart!click!cartClicked"] = true;
    $.__views.btnAddUser = Ti.UI.createButton({
        width: "80",
        height: "70",
        id: "btnAddUser",
        backgroundImage: "/aimages/adduser.png",
        left: "4%",
        top: "85%"
    });
    $.__views.homeWin.add($.__views.btnAddUser);
    addUserClicked ? $.__views.btnAddUser.addEventListener("click", addUserClicked) : __defers["$.__views.btnAddUser!click!addUserClicked"] = true;
    $.__views.btnReservation = Ti.UI.createButton({
        width: "80",
        height: "70",
        id: "btnReservation",
        backgroundImage: "/aimages/reservation.png",
        left: "28%",
        top: "85%"
    });
    $.__views.homeWin.add($.__views.btnReservation);
    reservationClicked ? $.__views.btnReservation.addEventListener("click", reservationClicked) : __defers["$.__views.btnReservation!click!reservationClicked"] = true;
    $.__views.btnCoupons = Ti.UI.createButton({
        width: "80",
        height: "70",
        id: "btnCoupons",
        backgroundImage: "/aimages/coupons.png",
        left: "52%",
        top: "85%"
    });
    $.__views.homeWin.add($.__views.btnCoupons);
    couponsClicked ? $.__views.btnCoupons.addEventListener("click", couponsClicked) : __defers["$.__views.btnCoupons!click!couponsClicked"] = true;
    $.__views.btnMore = Ti.UI.createButton({
        width: "80",
        height: "70",
        id: "btnMore",
        backgroundImage: "/aimages/more.png",
        left: "76%",
        top: "85%"
    });
    $.__views.homeWin.add($.__views.btnMore);
    moreClicked ? $.__views.btnMore.addEventListener("click", moreClicked) : __defers["$.__views.btnMore!click!moreClicked"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    $.homeWin.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.homeWin.getActivity().actionBar;
            actionBar.setTitle("");
            actionBar.setBackgroundImage("/aimages/logo1.png");
            actionBar.setIcon("/aimages/transpernt.png");
        }
    });
    Alloy.Globals.navWnd = $.homeWin;
    $.homeWin.open();
    __defers["$.__views.btnHome!click!doClick"] && $.__views.btnHome.addEventListener("click", doClick);
    __defers["$.__views.btnMenu!click!menuClicked"] && $.__views.btnMenu.addEventListener("click", menuClicked);
    __defers["$.__views.btnMap!click!mapClicked"] && $.__views.btnMap.addEventListener("click", mapClicked);
    __defers["$.__views.btnCart!click!cartClicked"] && $.__views.btnCart.addEventListener("click", cartClicked);
    __defers["$.__views.btnAddUser!click!addUserClicked"] && $.__views.btnAddUser.addEventListener("click", addUserClicked);
    __defers["$.__views.btnReservation!click!reservationClicked"] && $.__views.btnReservation.addEventListener("click", reservationClicked);
    __defers["$.__views.btnCoupons!click!couponsClicked"] && $.__views.btnCoupons.addEventListener("click", couponsClicked);
    __defers["$.__views.btnMore!click!moreClicked"] && $.__views.btnMore.addEventListener("click", moreClicked);
    __defers["$.__views.btnHome!click!doClick"] && $.__views.btnHome.addEventListener("click", doClick);
    __defers["$.__views.btnMenu!click!menuClicked"] && $.__views.btnMenu.addEventListener("click", menuClicked);
    __defers["$.__views.btnMap!click!mapClicked"] && $.__views.btnMap.addEventListener("click", mapClicked);
    __defers["$.__views.btnCart!click!cartClicked"] && $.__views.btnCart.addEventListener("click", cartClicked);
    __defers["$.__views.btnAddUser!click!addUserClicked"] && $.__views.btnAddUser.addEventListener("click", addUserClicked);
    __defers["$.__views.btnReservation!click!reservationClicked"] && $.__views.btnReservation.addEventListener("click", reservationClicked);
    __defers["$.__views.btnCoupons!click!couponsClicked"] && $.__views.btnCoupons.addEventListener("click", couponsClicked);
    __defers["$.__views.btnMore!click!moreClicked"] && $.__views.btnMore.addEventListener("click", moreClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;