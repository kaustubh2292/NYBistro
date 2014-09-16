function Controller() {
    function __alloyId8(e) {
        if (e && e.fromAdapter) return;
        __alloyId8.opts || {};
        var models = filterFunction(__alloyId7);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = transformFunction(__alloyId4);
            var __alloyId6 = Alloy.createController("categorydetailsrow", {
                $model: __alloyId4,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId6.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function __alloyId13(e) {
        if (e && e.fromAdapter) return;
        __alloyId13.opts || {};
        var models = filterFunction(__alloyId12);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId9 = models[i];
            __alloyId9.__transform = transformFunction(__alloyId9);
            var __alloyId11 = Alloy.createController("categorydetailsrow", {
                $model: __alloyId9,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId11.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function filterFunction(collection) {
        return collection.where({
            SubCatId: subcatid
        });
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.Price = "$" + transform.Price;
        return transform;
    }
    function loginUser() {
        aUser = Alloy.createModel("User");
        aUser.login("nybistroadmin", "admin1234", options);
    }
    function logoutUser() {
        aUser.logout(options);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "categorydetails";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("MenuItem");
    var __alloyId7;
    $.__views.winCatDetails = Ti.UI.createWindow({
        id: "winCatDetails",
        backgroundColor: "white",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.winCatDetails && $.addTopLevelView($.__views.winCatDetails);
    $.__views.theTable = Ti.UI.createTableView({
        id: "theTable"
    });
    $.__views.winCatDetails.add($.__views.theTable);
    var __alloyId12 = Alloy.Collections["MenuItem"] || MenuItem;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
        __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var subcatid = args.subcatid;
    var osname = "android";
    var aUser;
    var menuItems = Alloy.Collections.MenuItem;
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backbtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.winCatDetails);
        });
        $.winCatDetails.setLeftNavButton(backButton);
        $.winCatDetails.setBarImage("/images/categorydetailsbarbkg.png");
    } else $.winCatDetails.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.winCatDetails.getActivity().actionBar;
            actionBar.setTitle("DETAILS");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/toolbarbg.png");
            actionBar.setIcon("/aimages/backbtn.png");
            actionBar.onHomeIconItemSelected = function() {
                var homeWin = Alloy.createController("index").getView();
                homeWin.open();
                $.winCatDetails.close();
            };
        }
    });
    $.theTable.addEventListener("click", function(e) {
        var item = menuItems.at(e.row.menuitemid - 1);
        if ("iphone" == osname || "ipad" == osname) {
            var itemDetailsWnd = Alloy.createController("itemdetails", {
                itemdata: item
            }).getView();
            navWnd.openWindow(itemDetailsWnd, {
                animated: true
            });
        } else if ("android" === osname) {
            var itemdetailwin = Alloy.createController("itemdetails", {
                itemdata: item
            }).getView();
            itemdetailwin.open();
        }
    });
    $.winCatDetails.addEventListener("focus", function() {
        loginUser();
    });
    $.winCatDetails.addEventListener("blur", function() {
        logoutUser();
    });
    menuItems.fetch();
    var options = {
        success: function(_m) {
            Ti.API.info(" SUCCESS " + JSON.stringify(_m));
        },
        error: function(_m, _e) {
            Ti.API.info(_e);
        }
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;