exports.SendSMS = function() {
    var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_SENDTO,
        data: "smsto:123456"
    });
    Ti.Android.currentActivity.startActivity(intent);
};