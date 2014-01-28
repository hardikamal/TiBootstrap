var args = arguments[0] || {};

var moment = require('alloy/moment');
var last = moment().format('X');
var first = moment().format('X');
var first_item = true;

var page = 1;

var ContentItems = Alloy.Collections.ContentItem;

function doFilter() {
	alert('Filter');
}

function doInit(e) {
	ContentItems.fetch(e);
}

function doRefresh(e) {
	ContentItems.fetch(e);
}

function doNext(e) {
	page++;
	ContentItems.fetch({
		urlparams: {
			page : page,
			
		},
		success: e.success,
		error: e.error
	});
	Ti.API.error('doNext Called');
}

function doItemClick(e) {
	alert(e);
}

$.dlist.init($.contentList);
