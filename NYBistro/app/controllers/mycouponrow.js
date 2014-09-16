var args = arguments[0] || {};
$.primaryLabel.text = args.primaryLabel || '';
$.subtitle.text = args.subTitle || '';
var osname = Ti.Platform.osname;

if (osname ==='iphone') {

if(Number(args.rownum) % 2) {
	$.lblloyaltycoupon.backgroundImage = 'images/loyaltycoupontag.png';
}
}else if (osname ==='android') {
	if(Number(args.rownum) % 2) {
	$.lblloyaltycoupon.backgroundImage = '/aimages/loyaltycoupontag.png';
	}
};