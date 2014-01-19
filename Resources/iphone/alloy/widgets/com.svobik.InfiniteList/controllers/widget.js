function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.svobik.InfiniteList/" + s : s.substring(0, index) + "/com.svobik.InfiniteList/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function getAllItems() {
        ContentItems.fetch({
            success: function() {
                ContentItems.each(function(model) {
                    var timestamp = moment(model.get("date")).format("X");
                    var item = getContentItem(model);
                    if (last > timestamp) {
                        $.listSection.appendItems([ item ]);
                        last = timestamp;
                        Ti.API.warn("Append");
                    } else if (timestamp > first) {
                        $.listSection.insertItemsAt(0, [ item ]);
                        first = timestamp;
                        Ti.API.warn("Pop");
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
    function doCreateList() {
        getAllItems();
    }
    function getContentItem(model) {
        Ti.API.info("Fetch result: " + model);
        var item = {
            heading: {
                text: model.get("title")
            },
            excerpt: {
                text: model.get("content")
            },
            poster: {
                image: "http://2.bp.blogspot.com/-WuasmTMjMA4/TY0SS4TzIMI/AAAAAAAAFB4/6alyfOzWsqM/s640/flowers-wallpapers-love-blooms-roses-bunch-of-flowers.jpg"
            }
        };
        return item;
    }
    function doRefresh(callback) {
        getAllItems("top");
        callback(!ContentItems.length);
    }
    function doLoadNext(callback) {
        getAllItems();
        callback(!ContentItems.length);
    }
    function doItemClick(e) {
        alert("You clicked me! #" + e.itemIndex);
    }
    function cancel() {
        var headerController = Widget.createController("header");
        headerController.cancel();
        var footerController = Widget.createController("footer");
        footerController.cancel();
        $.listView.removeEventListener("itemclick");
    }
    function init() {
        options.onCreate();
        var headerController = Widget.createController("header");
        headerController.init({
            element: $.listView,
            onRefresh: options.onRefresh
        });
        var footerController = Widget.createController("footer");
        footerController.init({
            element: $.listView,
            onLoadNext: options.onLoadNext
        });
        $.listView.addEventListener("itemclick", options.onItemClick);
    }
    var Widget = new (require("alloy/widget"))("com.svobik.InfiniteList");
    this.__widgetId = "com.svobik.InfiniteList";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId1 = {};
    var __alloyId4 = [];
    var __alloyId5 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId6 = [];
            var __alloyId7 = {
                type: "Ti.UI.ImageView",
                bindId: "poster",
                properties: {
                    top: 0,
                    width: "100%",
                    bindId: "poster"
                }
            };
            __alloyId6.push(__alloyId7);
            return __alloyId6;
        }(),
        properties: {
            top: 0,
            height: 125,
            width: "100%",
            borderRadius: 0
        }
    };
    __alloyId4.push(__alloyId5);
    var __alloyId8 = {
        type: "Ti.UI.Label",
        bindId: "heading",
        properties: {
            color: "#000",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            top: 130,
            font: {
                fontSize: 18,
                fontWeight: "bold"
            },
            bindId: "heading"
        }
    };
    __alloyId4.push(__alloyId8);
    var __alloyId9 = {
        type: "Ti.UI.Label",
        bindId: "excerpt",
        properties: {
            color: "#000",
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            top: 150,
            font: {
                fontSize: 12
            },
            bindId: "excerpt"
        }
    };
    __alloyId4.push(__alloyId9);
    var __alloyId3 = {
        properties: {
            name: "defaultTemplate",
            height: "200"
        },
        childTemplates: __alloyId4
    };
    __alloyId1["defaultTemplate"] = __alloyId3;
    $.__views.listSection = Ti.UI.createListSection({
        id: "listSection"
    });
    var __alloyId11 = [];
    __alloyId11.push($.__views.listSection);
    $.__views.listView = Ti.UI.createListView({
        sections: __alloyId11,
        templates: __alloyId1,
        pullView: void 0,
        footerView: void 0,
        id: "listView",
        defaultItemTemplate: "defaultTemplate"
    });
    $.__views.listView && $.addTopLevelView($.__views.listView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var options = {
        onCreate: doCreateList,
        onRefresh: doRefresh,
        onLoadNext: doLoadNext,
        onItemClick: doItemClick
    };
    var ContentItems = Alloy.createCollection("ContentItem");
    var moment = require("alloy/moment");
    var last = moment().format("X");
    var first = moment().format("X");
    var first_item = true;
    exports.init = init;
    exports.cancel = cancel;
    exports.doCreateList = doCreateList;
    exports.doLoadNext = doLoadNext;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;