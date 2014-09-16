$.btnSubmit.addEventListener("click",function(){
	alert("hi");
});

if (Ti.Platform.osname == "android") {
	// Event listener for adding action bar.
	$.loginWnd.addEventListener('open', function() {
		if (Ti.Platform.Android.API_LEVEL >= 11) {
			//alert('api is 11');
			var actionBar = $.loginWnd.getActivity().actionBar;
			actionBar.setTitle('');
			actionBar.setDisplayHomeAsUp(true);
			actionBar.setBackgroundImage('/aimages/toolbarbg.png');
			actionBar.setIcon('/aimages/arrowbutton.png');
			actionBar.onHomeIconItemSelected = function() {
				
				$.loginWnd.close();
			};
		}
	});
}