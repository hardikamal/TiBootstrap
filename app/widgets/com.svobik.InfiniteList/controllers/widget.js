/**
 * Widget options
 */
var options = {
	onCreate : doCreateList,
	onRefresh : doRefresh,
	onLoadNext : doLoadNext,
	onItemClick : doItemClick,
};

var ContentItems = Alloy.createCollection('ContentItem');


var moment = require('alloy/moment');
var last = moment().format('X');
var first = moment().format('X');
var first_item = true;

/*ContentItems.on("fetch", function (model) {
	Ti.API.info("fetch was fired");
	var item = getContentItem(model);

	if (model.get('date') > last) {
		$.listSection.appendItems([item]);
	} else if (model.get('date') < first) {
		$.listSection.insertItemsAt(0,[item]);
	}
});*/

function getAllItems (insertAt) {
	ContentItems.fetch({
		success: function () {
			var items = [];
			ContentItems.each(function (model) {
				var timestamp = moment(model.get('date')).format('X');
				var item = getContentItem(model);

				// Ti.API.info("timestamp: " + timestamp);
				// Ti.API.info("date: " + model.get('date'));
				// Ti.API.info("last: " + last);
				// Ti.API.info("first: " + first);

				if (timestamp < last) {
					$.listSection.appendItems([item]);
					last = timestamp;
					Ti.API.warn('Append');
				} else if (timestamp > first) {
					$.listSection.insertItemsAt(0,[item]);
					first = timestamp;
					Ti.API.warn('Pop');

				}

				if (first_item) {
					last = timestamp;
					first = timestamp;
					first_item = false;
				}
			});
		}
	});
}

/**
 * Creates ListView
 */
function doCreateList(items) {
	getAllItems();
}

function getContentItem (model) {
	Ti.API.info("Fetch result: " + model);

	var item = {
		heading : {
			text : model.get('title')
		},
		excerpt : {
			text : model.get('content')
		},
		poster : {
			image : "http://2.bp.blogspot.com/-WuasmTMjMA4/TY0SS4TzIMI/AAAAAAAAFB4/6alyfOzWsqM/s640/flowers-wallpapers-love-blooms-roses-bunch-of-flowers.jpg" //model.get('featured_image')
		},
	};

	return item;
}

/**
 * Default refresh
 */
function doRefresh(callback) {
	getAllItems('top');
	callback(!ContentItems.length);
}

/**
 * Default load next
 */
function doLoadNext(callback) {
	getAllItems();
	callback(!ContentItems.length);
}

/**
 * Handles item click
 */
function doItemClick(e) {
	alert('You clicked me! #' + e.itemIndex);
}

/**
 * Sets widget's options
 */
function setOptions(_options) {
	delete _options.__parentSymbol;
	delete _options.__itemTemplate;
	delete _options.$model;

	_.extend(options, _options);
}

/**
 * Cancels widget event listeners
 */
function cancel() {

	var headerController = Widget.createController('header');

	headerController.cancel();

	var footerController = Widget.createController('footer');

	footerController.cancel();

	$.listView.removeEventListener('itemclick');
}

/**
 * Inits widget
 */
function init(_options) {

	//setOptions(_options);

	options.onCreate();

	var headerController = Widget.createController('header');

	headerController.init({
		element : $.listView,
		onRefresh : options.onRefresh,
	});

	var footerController = Widget.createController('footer');

	footerController.init({
		element : $.listView,
		onLoadNext : options.onLoadNext,
	});

	$.listView.addEventListener('itemclick', options.onItemClick);
}

/**
 * Public functions
 */
exports.init = init;
exports.cancel = cancel;
exports.doCreateList = doCreateList;
exports.doLoadNext = doLoadNext;
