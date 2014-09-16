var args = arguments[0] || {};
var osname = Ti.Platform.osname;
if (osname === 'iphone') {
switch(args.rownum) {
	case 0:
		$.imgViewIcon.width = "29.5";
		$.imgViewIcon.height = "22.5";

		$.imgViewIcon.image = '/images/emailicon.png';
		$.lblTitle.text = 'Share by Email';
		break;
	case 1:
		$.imgViewIcon.width = "29.5";
		$.imgViewIcon.height = "32";

		$.imgViewIcon.image = '/images/smsicon.png';
		$.lblTitle.text = 'Share by Text';
		break;
	case 2:
		$.imgViewIcon.width = "15";
		$.imgViewIcon.height = "28.5";

		$.imgViewIcon.image = '/images/facebookicon.png';
		$.lblTitle.text = 'Share by Facebook';
		break;
	case 3:
		$.imgViewIcon.width = "33";
		$.imgViewIcon.height = "27.5";

		$.imgViewIcon.image = '/images/twittericon.png';
		$.lblTitle.text = 'Share by Twitter';
		break;	
}
} else if (osname === 'android') {
	
	switch(args.rownum) {
	case 0:
		$.imgViewIcon.width = "29.5";
		$.imgViewIcon.height = "22.5";

		$.imgViewIcon.image = '/aimages/emailicon.png';
		$.lblTitle.text = 'Share by Email';
		break;
	case 1:
		$.imgViewIcon.width = "29.5";
		$.imgViewIcon.height = "32";

		$.imgViewIcon.image = '/aimages/smsicon.png';
		$.lblTitle.text = 'Share by Text';
		break;
	case 2:
		$.imgViewIcon.width = "15";
		$.imgViewIcon.height = "28.5";

		$.imgViewIcon.image = '/aimages/facebookicon.png';
		$.lblTitle.text = 'Share by Facebook';
		break;
	case 3:
		$.imgViewIcon.width = "33";
		$.imgViewIcon.height = "27.5";

		$.imgViewIcon.image = '/aimages/twittericon.png';
		$.lblTitle.text = 'Share by Twitter';
		break;	
}
	
}