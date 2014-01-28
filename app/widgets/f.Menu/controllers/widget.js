var args = arguments[0] || {};

var MenuItems = Widget.Collections.MenuItem;

function doInit(e) {
	MenuItems.fetch(e);
}

function doItemClick(evt) {
	Ti.Platform.openURL(MenuItems.models[evt.itemIndex].get('content'));
}

$.dlist.init($.menuList);