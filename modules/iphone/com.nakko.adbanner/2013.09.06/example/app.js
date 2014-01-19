// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var adbanner = require('com.nakko.adbanner');
Ti.API.info("module is => " + adbanner);

label.text = adbanner.example();

adbanner.exampleProp = "This is a test value";
Ti.API.info("module exampleProp is => " + adbanner.exampleProp);

var adBannerView = adbanner.createView({
  "adUnit": 202,
//  "showCloseButtonTime": 2,
//  "autocloseInterstitialTime": 8,
  "refreshTime": 4.0,
  "left": 0.0,
  "top": 0.0,
  "width": 320.0,
  "height": 460.0
});

win.add(adBannerView);
