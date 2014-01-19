var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
win.open();

var AirplayModule = require('tv.wappzapp.airplaybutton');
Ti.API.info("module is => " + AirplayModule);

var airplayButton = AirplayModule.createView({
	width:"64dp",
	height:"64dp",
	icon: "airplay.png",
	selectedIcon: "airplay_selected.png"
});
win.add(airplayButton);
airplayButton.addEventListener("AirPlayAvailabilityChanged", function(e){
	Ti.API.info(e);
});

// TESTER
var btn = Ti.UI.createButton({
	top:50,
	title:"is airplay available?"
});
btn.addEventListener("click",function(){
	alert("available: " + airplayButton.isAirplayAvailable());
});
win.add(btn);



