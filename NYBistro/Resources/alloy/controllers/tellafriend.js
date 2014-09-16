function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tellafriend";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.tellAFriendWnd = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "tellAFriendWnd",
        statusBarHidden: "false",
        navBarHidden: "false"
    });
    $.__views.tellAFriendWnd && $.addTopLevelView($.__views.tellAFriendWnd);
    $.__views.containerView = Ti.UI.createView({
        backgroundColor: "transparent",
        top: "10",
        left: "10",
        right: "10",
        height: Ti.UI.SIZE,
        id: "containerView"
    });
    $.__views.tellAFriendWnd.add($.__views.containerView);
    $.__views.theTable = Ti.UI.createTableView({
        height: Ti.UI.SIZE,
        borderRadius: "10",
        borderWidth: "1",
        borderColor: "#95512c",
        id: "theTable",
        backgroundColor: "transparent"
    });
    $.__views.containerView.add($.__views.theTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var osname = "android";
    if ("iphone" === osname) {
        var backButton = Ti.UI.createButton({
            height: 26,
            width: 65,
            backgroundImage: "/images/backbtn.png"
        });
        var shareBtn = Ti.UI.createButton({
            height: 26.5,
            width: 55.5,
            textAlign: "TEXT_ALIGNMENT_CENTER",
            font: {
                fontFamily: "Arial",
                fontSize: 11,
                fontWeight: "bold"
            },
            color: "#ebbca3",
            backgroundImage: "/images/btnsharebkg.png"
        });
        var navWnd = Alloy.Globals.navWnd;
        backButton.addEventListener("click", function() {
            navWnd.closeWindow($.tellAFriendWnd);
        });
        $.tellAFriendWnd.setLeftNavButton(backButton);
        $.tellAFriendWnd.setRightNavButton(shareBtn);
        $.tellAFriendWnd.setBarImage("/images/tellafriendbarbkg.png");
        var tbldata = [];
        for (var i = 0; 4 > i; i++) {
            var row = Alloy.createController("tellafriendrow", {
                rownum: i
            }).getView();
            tbldata.push(row);
        }
        $.theTable.data = tbldata;
        var controls = [];
        $.theTable.addEventListener("click", function(e) {
            if ("/images/chkboxunchecked.png" == e.source.backgroundImage) {
                if (controls.length > 0) {
                    var temp = controls.pop();
                    temp.backgroundImage = "/images/chkboxunchecked.png";
                }
                e.source.backgroundImage = "/images/chkboxchecked.png";
                controls.push(e.source);
            } else e.source.backgroundImage = "/images/chkboxunchecked.png";
        });
        shareBtn.addEventListener("click", function() {
            alert("show clicked");
        });
    } else if ("android" === osname) {
        var tbldata = [];
        for (var i = 0; 4 > i; i++) {
            var row = Alloy.createController("tellafriendrow", {
                rownum: i
            }).getView();
            tbldata.push(row);
        }
        $.theTable.data = tbldata;
        $.theTable.footerView = Ti.UI.createView({
            height: 1,
            backgroundColor: "transparent"
        });
        var controls = [];
        $.theTable.addEventListener("click", function(e) {
            if ("/aimages/chkboxunchecked.png" == e.source.backgroundImage) {
                if (controls.length > 0) {
                    Ti.API.info("uncheck");
                    var temp = controls.pop();
                    temp.backgroundImage = "/aimages/chkboxunchecked.png";
                }
                Ti.API.info("check");
                e.source.backgroundImage = "/aimages/chkboxchecked.png";
                controls.push(e.source);
            } else {
                Ti.API.info("uncheck");
                e.source.backgroundImage = "/aimages/chkboxunchecked.png";
            }
        });
        $.tellAFriendWnd.addEventListener("open", function() {
            if (Ti.Platform.Android.API_LEVEL >= 11) {
                var actionBar = $.tellAFriendWnd.getActivity().actionBar;
                actionBar.setTitle("");
                actionBar.setDisplayHomeAsUp(true);
                actionBar.setBackgroundImage("/aimages/tellafriendbarbkg.png");
                actionBar.setIcon("/aimages/backbtn.png");
                actionBar.onHomeIconItemSelected = function() {
                    $.tellAFriendWnd.close();
                };
            }
        });
        var activity = $.tellAFriendWnd.activity;
        activity.onCreateOptionsMenu = function(e) {
            var menu = e.menu;
            var addMenuItemShere = menu.add({
                icon: "/aimages/btnsharebkg.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            });
            addMenuItemShere.addEventListener("click", function() {
                alert("share here!");
            });
        };
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;