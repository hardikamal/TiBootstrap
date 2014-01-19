var Alloy = require('alloy'),
	_ = Alloy._, 
	Backbone = Alloy.Backbone,
	GA = require('com.animecyc.analytics');

//GA.optOut = true;
GA.debug = false;
GA.trackUncaughtExceptions = true;

GoogleTracker = GA.getTracker('UA-1XXXX');
GoogleTracker.setSessionTimeout(30*60);
// GoogleTracker.setTrackUncaughtExceptions(true);

//////////////////

// WZ Wrapper Stuff

// Keep Window History in an Array, keeping most
// recent windows at the front.
var _screenHistory = ['Initial'];
var enableLogging = true;

/**
 * @private
 */
var _popScreen = function(){
	log(_screenHistory[0], _screenHistory[1]);
	
	// Pops the first element
	_screenHistory.shift();
	
	if(!GA.debug) GoogleTracker.trackScreen(_screenHistory[0]);
	return true;
};

/**
 * @private
 */
var _pushScreen = function(newScreen){
	if (newScreen === _screenHistory[0] ) return false;
	if (!newScreen) throw 'tried to log undefined screen';

	log(_screenHistory[0], newScreen);
	
	// Add new screen at the Ti.Media.MusicPlayer.skipToBeginning()
	_screenHistory.unshift(newScreen);
	if(!GA.debug) GoogleTracker.trackScreen(_screenHistory[0]);
	return true;
};

/**
 * @private
 */
var _prepareTrack = function(_o){

	var fields = ['category','action','label'];

	_.each(fields, function(key){
		if(! _o[key]) Ti.API.error('trackEvent missing: "' + key +'"');
	});
	if(_o.screen) _pushScreen(_o.screen);

	_doTrack(_.pick(_o, fields));
};

/**
 * @private
 */
var _doTrack = function(params){
	if(!GA.debug){
		if(_.isNull(params.value) || _.isUndefined(params.value))
			params.value = 1;
		
		GoogleTracker.trackEvent(params);
	}else{
		Ti.API.error('GA Track event on ' + _screenHistory[0]);
		Ti.API.error(params);
	}
};

/**
 * @private
 */
var _trackTime = function(params) {
	GoogleTracker.trackTime(params);
};

/**
 * @private
 */
var _trackSocial = function(params) {
	GoogleTracker.trackSocial(params);
};

/**
 * @private
 */
var log = function(_old, _new){
	if(!enableLogging) return false;
	Ti.API.error('= Screen Change =');
	Ti.API.error(_old + ' -> ' + _new);
	Ti.API.error('= Screen Change =');
};

/**
 * @class Tracker
 * @singleton
 * 
 * generic function for the Google Analytics native modules
 */
module.exports = {
	goBack : _popScreen,
	trackEvent : _prepareTrack,
	trackScreen : _pushScreen,
	trackTime : _trackTime,
	trackSocial : _trackSocial
};