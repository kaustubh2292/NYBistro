function Controller() {
    function __alloyId49(e) {
        if (e && e.fromAdapter) return;
        __alloyId49.opts || {};
        var models = __alloyId48.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId45 = models[i];
            __alloyId45.__transform = {};
            var __alloyId47 = Alloy.createController("categoryrow", {
                $model: __alloyId45,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId47.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function __alloyId54(e) {
        if (e && e.fromAdapter) return;
        __alloyId54.opts || {};
        var models = __alloyId53.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId50 = models[i];
            __alloyId50.__transform = {};
            var __alloyId52 = Alloy.createController("categoryrow", {
                $model: __alloyId50,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId52.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function loginUser() {
        aUser = Alloy.createModel("User");
        aUser.login("nybistroadmin", "admin1234", options);
    }
    function logoutUser() {
        aUser.logout(options);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Category");
    var __alloyId48;
    $.__views.menuWin = Ti.UI.createWindow({
        id: "menuWin",
        backgroundColor: "white",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.menuWin && $.addTopLevelView($.__views.menuWin);
    $.__views.theTable = Ti.UI.createTableView({
        id: "theTable"
    });
    $.__views.menuWin.add($.__views.theTable);
    var __alloyId53 = Alloy.Collections["Category"] || Category;
    __alloyId53.on("fetch destroy change add remove reset", __alloyId54);
    exports.destroy = function() {
        __alloyId48.off("fetch destroy change add remove reset", __alloyId49);
        __alloyId53.off("fetch destroy change add remove reset", __alloyId54);
    };
    _.extend($, $.__views);
    var osname = "android";
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backtohomebtn.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        var aUser;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.menuWin);
        });
        $.menuWin.setLeftNavButton(backButton);
        $.menuWin.setBarImage("/images/menucategorybarbkg.png");
    } else $.menuWin.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.menuWin.getActivity().actionBar;
            actionBar.setTitle("MENU");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/toolbarbg.png");
            actionBar.setIcon("/aimages/arrowbutton.png");
            actionBar.onHomeIconItemSelected = function() {
                $.menuWin.close();
            };
        }
    });
    $.theTable.addEventListener("click", function(e) {
        if ("iphone" == osname || "ipad" == osname) {
            var catDetailsWnd = Alloy.createController("subcategories", {
                subcatids: e.row.SubCategories
            }).getView();
            var navWnd = Alloy.Globals.navWnd;
            navWnd.openWindow(catDetailsWnd, {
                animated: true
            });
        } else if ("android" == osname) {
            var catDetailsWnd = Alloy.createController("subcategories", {
                subcatids: e.row.SubCategories
            }).getView();
            catDetailsWnd.open();
        }
    });
    var options = {
        success: function(_m) {
            Ti.API.info(" SUCCESS " + JSON.stringify(_m));
        },
        error: function(_m, _e) {
            Ti.API.info(_e);
        }
    };
    $.menuWin.addEventListener("focus", function() {
        loginUser();
    });
    $.menuWin.addEventListener("blur", function() {
        logoutUser();
    });
    Alloy.Collections.Category.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;