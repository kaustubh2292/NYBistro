var optionsCol = Alloy.Collections.OptionalItem;
/*
optionsCol.on("fetch", function(){
	alert(optionsCol.length);
});*/

// Get optional items from ACS
optionsCol.fetch();
var collapsed = true;
$.animatebtn.addEventListener('click', function() {

		if (collapsed) {
		
			

		

			

			$.optiontablecontainer.animate({

				height : '50%',
				duration : 400

			});
			;
			

			collapsed = false;
		} else {
			
			
		
		

			$.optiontablecontainer.animate({

				height : '0.1%',
				duration : 400
			});
			
			
			collapsed = true;

		}
	});