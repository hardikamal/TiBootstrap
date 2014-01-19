if(OS_ANDROID)
	var gcm = require('net.iamyellow.gcmjs');

/**
 * @class PushNotifications
 * @singleton
 * 
 * Functions handling Push Notifications on both iOS and Android
 */
var PN = {
	/**
	 * Register this device for Push Notifications
	 */
	register: function() {
		if(OS_IOS) {

			// First register
			Ti.Network.registerForPushNotifications({
				types : [
					Ti.Network.NOTIFICATION_TYPE_BADGE, 
					Ti.Network.NOTIFICATION_TYPE_ALERT, 
					Ti.Network.NOTIFICATION_TYPE_SOUND
				],
				success: onRegSuccess,
				error: onRegError,
				callback: onNewNotification
			});

			// Second, check for existing Push Notifications 
			checkForPushNotifications();

			// Third, check for Push Notifications when coming back from background
			Ti.App.addEventListener('resume', checkForPushNotifications);
		}
		else if(OS_ANDROID) {
			// http://iamyellow.net/post/40100981563/gcm-appcelerator-titanium-module
			
			var pendingData = gcm.data;
			if (pendingData && pendingData !== null) {
				// if we're here is because user has clicked on the notification
				// and we set extras for the intent 
				// and the app WAS NOT running
				// (don't worry, we'll see more of this later)
				onNewNotification(pendingData);
			}

			gcm.registerForPushNotifications({
				success: onRegSuccess,
				error: onRegError,
				callback: onNewNotification,
				unregister: onUnregister,
				data: onNewNotification
			});
		}
	},

	/**
	 * Unregister this device with the WappZapp backend (for example on logout)
	 */
	unregister: function() {
		onUnregister();
	}
};

var _pushRegistration = Alloy.createModel('ParsePushReg', Ti.App.Properties.getObject('wz.pushRegistration', {}));

function onNewNotification(evt) {
	Ti.API.info(JSON.stringify(evt, null, 4));

	// When a video is given, show pupup asking: Watch now, Watch later, Cancel
	if(evt.episode_id) {
		var alertDialog = Titanium.UI.createAlertDialog({
			title : L('notification_video_received', 'Tip van WappZapp!'),
			message : L('watch_it_later_or_watch_now', 'invullen'),
			buttonNames : [L('watch_it_later', 'Bekijk later'), L('watch_now', 'Bekijk nu!'), L('no_thanks', 'Nee, dankje...')]
		});

		alertDialog.addEventListener('click', function(e) {
			if (e.index === 0) {
				var video = Alloy.createModel('Video');
				video.fetch({
					data: {
						action: 'getvideoitem',
						episode_id: evt.episode_id
					},
					success: function() {
						video.addToWatchItLater();
						C.getWatchItLater().add(video, {at: 0});
					}
				});
			} else if (e.index === 1) {
				Alloy.createController('Video', {
					video_id: evt.episode_id
				});
			}
		});

		alertDialog.show();		
	}
	
	// Open webview with given url after asking Watch Now, Cancel
	
	// Send user to app store for update, after asking Update Now, Update Later, Cancel
}

/**
 * Handle incoming unregister event from Google. This means that this device has been unregistered by Google or by the User at Google.
 * @private
 * 
 * @param  {Object} evt Event details
 */
function onUnregister(evt) {
	_pushRegistration.destroy();
}

/**
 * Handle successful push notification registration. Device registered with Apple/Google, now register with WappZapp backend
 * @private
 * 
 * @param  {Object} evt Event details
 */
function onRegSuccess(evt) {
	
	// Always register at the WappZapp backend
	new Cloud({
		url: '/api.php',
		data: {
			action: 'register_push',
			deviceToken: evt.deviceToken,
			deviceType: OS_IOS ? 'ios' : 'android'
		}
	});
	
	// On iOS, also register at Parse
	if(OS_IOS) {
		_pushRegistration.set('deviceType', 'ios');
		_pushRegistration.set('deviceToken', Ti.Network.remoteDeviceUUID );
		_pushRegistration.set('channels', [ 'general', 'wappzapp_' + Acl.getLoggedinUser().id ]);
		_pushRegistration.save(null, {
			success: function(model) {
				Ti.API.error(model.attributes);

				Ti.App.Properties.setObject('wz.pushRegistration', model.toJSON());
			},
			error: function(errorEvt) {
				Ti.API.error(JSON.stringify(errorEvt, null, 4));
			}
		});
	}
}

function onRegError(evt) {
	Ti.API.info('push error');
	Ti.API.error(JSON.stringify(evt, null, 4));
}

function checkForPushNotifications() {
	if(OS_IOS) {
		var args = Ti.App.getArguments();

		if (args.UIApplicationLaunchOptionsRemoteNotificationKey) {
			onNewNotification(args.UIApplicationLaunchOptionsRemoteNotificationKey);
		}
	}
}

module.exports = PN;
