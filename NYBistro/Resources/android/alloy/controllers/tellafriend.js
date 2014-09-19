function Controller() {
    function postToFacebook() {
        function connect() {
            fb.addEventListener("login", function(e) {
                if (e.success) {
                    alert("You are now logged in!");
                    var data = {
                        link: "http://www.appcelerator.com",
                        name: "Bon App",
                        message: "Check out this app for ordering delicious food",
                        caption: "Bon Restorent",
                        picture: "http://developer.appcelerator.com/assets/img/DEV_titmobile_image.png",
                        description: "Bon app shows you restorent menu and table reservations. "
                    };
                    fb.dialog("feed", data, function(e) {
                        e.success && e.result ? Ti.API.info("Success! New Post ID: " + e.result) : e.error ? alert(e.error) : alert("User canceled dialog.");
                    });
                } else e.error ? alert("Error: " + e.error) : e.cancelled && alert("You cancelled the login");
            });
        }
        var fb = require("facebook");
        fb.appid = "479093032181371";
        fb.permissions = [ "publish_stream", "offline_access" ];
        fb.authorize();
        connect();
    }
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
        borderRadius: "7",
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
        var shareAction = "NONE";
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
                0 === e.index ? shareAction = "EMAIL" : 1 === e.index ? shareAction = "TEXT" : 2 === e.index ? shareAction = "FACEBOOK" : 3 === e.index && (shareAction = "TWITTER");
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
                if ("EMAIL" === shareAction) {
                    var emailDialog = Ti.UI.createEmailDialog();
                    emailDialog.subject = "Hello from Titanium";
                    emailDialog.toRecipients = [ "nybistroapp@gmail.com" ];
                    emailDialog.messageBody = "<b>Appcelerator Titanium Rocks!</b>";
                    emailDialog.open({
                        animated: true
                    });
                } else if ("TEXT" === shareAction) Titanium.Platform.openURL("sms:14692887534"); else if ("FACEBOOK" === shareAction) postToFacebook(); else if ("TWITTER" === shareAction) {
                    var twitwindowobject = require("TwitterHelper");
                    var tweetwindow = new twitwindowobject();
                    tweetwindow.open();
                }
            });
        };
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;