var args = arguments[0] || {};
var osname = Ti.Platform.osname;
if (osname === 'iphone') {

if(args.rownum == 0)
{
	$.imgViewIcon.image = '/images/tellafriend.png';
	$.lblTitle.text = "Tell a Friend";
}else if(args.rownum == 1) {
	$.imgViewIcon.image = '/images/aboutus.png';
	$.lblTitle.text = "About Us";
}
}else if (osname === 'android') {
	
	if(args.rownum == 0)
{
	$.imgViewIcon.image = '/aimages/tellafriend.png';
	$.lblTitle.text = "Tell a Friend";
}else if(args.rownum == 1) {
	
	$.imgViewIcon.image = '/aimages/aboutus.png';
	$.lblTitle.text = "About Us";
}

}