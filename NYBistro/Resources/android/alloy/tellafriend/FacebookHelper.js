exports.postToFacebook = function() {
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
};