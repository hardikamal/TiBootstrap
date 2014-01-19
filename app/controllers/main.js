var args = arguments[0] || {};

var NappDrawerModule = require('dk.napp.drawer');
 
if (OS_IOS) {
    var drawer = NappDrawerModule.createDrawer({
        leftWindow : $.menuDrawer,
        centerWindow : $.nav,
        closeDrawerGestureMode : NappDrawerModule.CLOSE_MODE_ALL,
        openDrawerGestureMode : NappDrawerModule.OPEN_MODE_ALL,
        leftDrawerWidth : 260,
        fading: 0.2, // 0-1
        parallaxAmount: 0.5, //0-1
        shadowWidth:"40dp",
        //rightDrawerWidth: 220
    });
}
 
if (OS_ANDROID) {
    var drawer = NappDrawerModule.createDrawer({
    fullscreen:false,
    exitOnClose: true,
    leftWindow: $.menuDrawer,
    centerWindow: $.nav,
    fading: 0.2, // 0-1
    parallaxAmount: 0.2, //0-1
    shadowWidth:"40dp",
    leftDrawerWidth: "200dp",
    animationMode: NappDrawerModule.ANIMATION_NONE,
    closeDrawerGestureMode: NappDrawerModule.MODE_MARGIN,
    openDrawerGestureMode: NappDrawerModule.MODE_ALL
});
}
 
function toggleMenu() {
    drawer.toggleLeftWindow();
}
 
Ti.App.addEventListener('App:closeMenuDrawer', function(e) {
    drawer.toggleLeftWindow();
});

function notify () {
	
}

drawer.open();

function doItemClick(e) {
    alert('blaat'+ e);
}

$.ilist.init();

