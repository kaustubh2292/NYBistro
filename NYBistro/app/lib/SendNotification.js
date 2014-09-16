/**
 * @author prashant
 */
exports.PushNotification = function(callback) {
	
	
	
	var CloudPush = require('ti.cloudpush');
	var Cloud = require('ti.cloud');
	CloudPush.debug = true;
	CloudPush.enabled = true;
	CloudPush.showTrayNotificationsWhenFocused = true;
	CloudPush.focusAppOnPush = false;

	var deviceToken;
	
	createdevicetoken();
	function createdevicetoken() {

		var CloudPush = require('ti.cloudpush');
		CloudPush.retrieveDeviceToken({
			success : function deviceTokenSuccess(e) {
				Ti.API.info('Device Token: ' + e.deviceToken);
				
				deviceToken =e.deviceToken;
				Subscribe();
			},
			error : function deviceTokenError(e) {
				Ti.API.info('Failed to register for push! ' + e.error);
			}
		});

	}

	

	function Subscribe() {
		Cloud.PushNotifications.subscribe({
			channel : 'reservation_notification',
			device_token : deviceToken,
			type : 'gcm'
		}, function(e) {
			if (e.success) {
				Ti.API.info('Subscribed for Push Notification!');
				send();
			} else {
				alert('Error:' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	}
	
	
	function send (){
		
		var note = 'Your resrvation request received!';
		
		Cloud.PushNotifications.notify({
			channel : 'admin_notification',
			payload : note
		}, function(e) {
			if (e.success) {
				Ti.API.info('Notification Sent');
				callback(true);

			} else {
				alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
					callback(false);	
						
				}
		});

	  
	}

};