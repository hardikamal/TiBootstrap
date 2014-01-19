function onClick(evt) {
	switch(evt.source.id) {
		case 'restorePurchases':
			
			break;
		case 'logout':
			
			break;
		case 'feedback':
			var emailDialog = Titanium.UI.createEmailDialog();
				emailDialog.subject = "Feedback";
				emailDialog.toRecipients = ['wienke@wappzapp.tv', 'colin@wappzapp.tv'];
				emailDialog.messageBody =
					"\n\r\n\r\n\r --- \n\r" +
					'Version: ' + Ti.App.getVersion() + "\n\r" +
					'Phone model: ' + Ti.Platform.model + "\n\r" +
					'OS: ' + Ti.Platform.osname + ' ' + Ti.Platform.version + "\n\r" +
					'';
				emailDialog.open();
			break;
		case 'rate':
			
			break;
		case 'faq':
			webviewUrl = 'http://www.wappzapp.tv/app_pages/faq.html';
			break;
		case 'tos':
			webviewUrl = 'http://www.wappzapp.tv/app_pages/ipad/privacy.html';
			break;
		case 'clearRecentlyWatched':
			C.getRecentlyWatched().reset();
			Alloy.createWidget('wz.Alert', {
				message: L('clear_watched_confirm')
			});
			break;
		case 'send_a_tip':
			emailDialog = Titanium.UI.createEmailDialog();
			emailDialog.html = true;
			emailDialog.toRecipients = ['tips@wappzapp.tv'];
			emailDialog.subject = L('send_a_tip_subject');
			emailDialog.messageBody =  "";
			emailDialog.open();
			break;
		case 'email':
			webviewUrl = 'http://www.wappzapp.tv/app_pages/newsletter.html';
			break;
		case 'facebook':
			webviewUrl = 'https://www.facebook.com/wappzapp';
			break;
		case 'twitter':
			webviewUrl = 'http://www.twitter.com/wappzapptv';
			break;
	}

	if(webviewUrl)
		Alloy.createWidget('wz.FullscreenWebView', {
			url: webviewUrl,
			title: '',
			cancelTitle: '',
			doneTitle: 'Close'
		});
}