var args = arguments[0] || {};
// alert(args.couponName);
// alert(args.discountVal);
$.primaryLabel.text = args.couponName || '';
if(args.couponType === "Discount")
{
	$.subtitle.text = args.discountVal + '%' || '';
}else {
	$.subtitle.text = '$' + args.discountVal || '';
}