function Controller() {
    function __alloyId132(e) {
        if (e && e.fromAdapter) return;
        __alloyId132.opts || {};
        var models = filterFunction(__alloyId131);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId128 = models[i];
            __alloyId128.__transform = {};
            var __alloyId130 = Alloy.createController("subcategoryrow", {
                $model: __alloyId128,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId130.getViewEx({
                recurse: true
            }));
        }
        $.__views.theTable.setData(rows);
    }
    function __alloyId137(e) {
        if (e && e.fromAdapter) return;
        __alloyId137.opts || {};
        var models = filterFunction(__alloyId136);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId133 = models[i];
            __alloyId133.__transform = {};
            var __alloyId135 = Alloy.createController("subcategoryrow", {
                $model: __alloyId133,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId135.getViewEx({
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
    function filterFunction(collection) {
        return collection.select(function(model) {
            return _.indexOf(subcatitemids, model.get("SubCatId")) > -1;
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subcategories";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("SubCategory");
    var __alloyId131;
    $.__views.subCatWin = Ti.UI.createWindow({
        id: "subCatWin",
        backgroundColor: "white",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.subCatWin && $.addTopLevelView($.__views.subCatWin);
    $.__views.theTable = Ti.UI.createTableView({
        id: "theTable"
    });
    $.__views.subCatWin.add($.__views.theTable);
    var __alloyId136 = Alloy.Collections["SubCategory"] || SubCategory;
    __alloyId136.on("fetch destroy change add remove reset", __alloyId137);
    exports.destroy = function() {
        __alloyId131.off("fetch destroy change add remove reset", __alloyId132);
        __alloyId136.off("fetch destroy change add remove reset", __alloyId137);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var osname = "android";
    var subcatitemids = args.subcatids;
    var navWnd = Alloy.Globals.navWnd;
    var aUser;
    if ("iphone" == osname || "ipad" == osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backbtn.png"
        });
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.subCatWin);
        });
        $.subCatWin.setLeftNavButton(backButton);
        $.subCatWin.setBarImage("/images/menucategorybarbkg.png");
    }
    $.theTable.addEventListener("click", function(e) {
        if ("iphone" == osname || "ipad" == osname) {
            var catDetailsWnd = Alloy.createController("categorydetails", {
                subcatid: e.row.subcatid
            }).getView();
            navWnd.openWindow(catDetailsWnd, {
                animated: true
            });
        } else if ("android" == osname) {
            var catDetailsWnd = Alloy.createController("categorydetails", {
                subcatid: e.row.subcatid
            }).getView();
            catDetailsWnd.open();
        }
    });
    "android" == osname && $.subCatWin.addEventListener("open", function() {
        if (Ti.Platform.Android.API_LEVEL >= 11) {
            var actionBar = $.subCatWin.getActivity().actionBar;
            actionBar.setTitle("");
            actionBar.setDisplayHomeAsUp(true);
            actionBar.setBackgroundImage("/aimages/menucategorybarbkg.png");
            actionBar.setIcon("/aimages/backbtn.png");
            actionBar.onHomeIconItemSelected = function() {
                $.subCatWin.close();
            };
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
    $.subCatWin.addEventListener("focus", function() {
        loginUser();
    });
    $.subCatWin.addEventListener("blur", function() {
        logoutUser();
    });
    Alloy.Collections.SubCategory.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;