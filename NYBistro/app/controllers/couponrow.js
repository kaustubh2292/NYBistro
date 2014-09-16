/*
var args = arguments[0] || {};
var osname = Ti.Platform.osname;
$.primaryLabel.text = args.primaryLabel || '';
$.subtitle.text = args.subTitle || '';
if (osname === 'iphone') {
	
	$.leftImage.image = '/images/newcoupon.png';
} else{
	$.leftImage.image = '/aimages/newcoupon.png';
};

Titanium.API.info(args.rownum);
if (osname === 'iphone') {
	
	if (Number(args.rownum) === 0)
		$.rightImage.image = 'images/arrowbrown.png';
	else if (Number(args.rownum) % 2) {
		$.leftImage.image = 'images/downloadedcoupon.png';
		$.rightImage.image = 'images/arrowgreen.png';
	} else if (Number(args.rownum) % 3) {
		$.leftImage.image = 'images/loyaltycoupons.png';
		$.rightImage.image = 'images/arrowbrown.png';
	}
} else if (osname === 'android'){

	if (Number(args.rownum) === 0)
		$.rightImage.image = '/aimages/arrow2.png';
	else if (Number(args.rownum) % 2) {		
		$.leftImage.image = '/aimages/downloadcoupon.png';
		$.rightImage.image = '/aimages/arrowgreen.png';
	} else if (Number(args.rownum) % 3) {
		$.leftImage.image = '/aimages/loyaltycoupon.png';
		$.rightImage.image = '/aimages/arrow2.png';
	}

}
*/
