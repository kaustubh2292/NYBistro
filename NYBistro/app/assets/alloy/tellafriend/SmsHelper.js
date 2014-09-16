// SMS helper works for android only
// This function populates sms window
exports.SendSMS=function() {
	
	var intent = Ti.Android.createIntent({						
						action: Ti.Android.ACTION_SENDTO,
						data: 'smsto:123456'
							
	});
		 // intent.putExtra('sms_body', 'Share what you want');
		 
	Ti.Android.currentActivity.startActivity(intent);
  
};
