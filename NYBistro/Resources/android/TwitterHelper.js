function postontwitter() {
    var win1 = Titanium.UI.createWindow({
        backgroundColor: "#fff"
    });
    var view = Ti.UI.createView({});
    var buttonwidth = 250;
    var buttonheight = 60;
    var fontstyle = {
        fontSize: 22,
        fontWeight: "bold"
    };
    var buttontop = 375;
    var viewtop = 100;
    Ti.Gesture.addEventListener("orientationchange", function() {
        var orientation = Titanium.Gesture.orientation;
        alert(orientation);
        if (2 === orientation) {
            buttonTwitter.top = 250;
            txtMessage.top = 60;
        }
    });
    var buttonTwitter = Titanium.UI.createButton({
        width: buttonwidth,
        height: buttonheight,
        top: buttontop,
        title: "Post",
        font: fontstyle
    });
    buttonTwitter.setCenter = "true";
    view.add(buttonTwitter);
    var txtMessage = Titanium.UI.createTextArea({
        width: 160,
        height: 120,
        top: viewtop,
        hintText: "tweet here!",
        font: {
            fontSize: 15
        },
        borderStyle: 1,
        backgroundColor: "#fff",
        borderColor: "#F5785A",
        borderWidth: 2
    });
    txtMessage.setCenter = "true";
    view.add(txtMessage);
    var social = require("social");
    var twitter = social.create({
        site: "Twitter",
        consumerKey: "e7VfIap97wEIxjlZQ6L3TQ",
        consumerSecret: "UJx13oEePlkRhNJgvLkTiI8rGyaVIPwrurZEItgLFjw"
    });
    buttonTwitter.addEventListener("click", function() {
        "" == txtMessage.value ? alert("Post is empty!") : twitter.share({
            message: txtMessage.value,
            success: function() {
                alert("Tweet Posted!");
            },
            error: function(error) {
                alert("Oh no! " + error);
            }
        });
    });
    win1.add(view);
    return win1;
}

module.exports = postontwitter;