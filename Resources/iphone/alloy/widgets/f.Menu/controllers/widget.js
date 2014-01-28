function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "f.Menu/" + s : s.substring(0, index) + "/f.Menu/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function __alloyId13(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId13.opts || {};
        var models = __alloyId12.models;
        var len = models.length;
        var __alloyId8 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId9 = models[i];
            __alloyId9.__transform = {};
            var __alloyId11 = {
                template: "menuDefault",
                title: {
                    text: "undefined" != typeof __alloyId9.__transform["title"] ? __alloyId9.__transform["title"] : __alloyId9.get("title")
                }
            };
            __alloyId8.push(__alloyId11);
        }
        opts.animation ? $.__views.menuListSection.setItems(__alloyId8, opts.animation) : $.__views.menuListSection.setItems(__alloyId8);
    }
    function doInit(e) {
        MenuItems.fetch(e);
    }
    function doItemClick(evt) {
        Ti.Platform.openURL(MenuItems.models[evt.itemIndex].get("content"));
    }
    var Widget = new (require("alloy/widget"))("f.Menu");
    this.__widgetId = "f.Menu";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Widget.Collections.instance("MenuItem");
    $.__views.dlist = Alloy.createWidget("com.svobik7.DynamicList", "widget", {
        id: "dlist",
        __parentSymbol: __parentSymbol
    });
    $.__views.dlist && $.addTopLevelView($.__views.dlist);
    var __alloyId2 = {};
    var __alloyId5 = [];
    var __alloyId7 = {
        type: "Ti.UI.Label",
        bindId: "title",
        properties: {
            bindId: "title"
        }
    };
    __alloyId5.push(__alloyId7);
    var __alloyId4 = {
        properties: {
            name: "menuDefault",
            height: "60"
        },
        childTemplates: __alloyId5
    };
    __alloyId2["menuDefault"] = __alloyId4;
    $.__views.menuListSection = Ti.UI.createListSection({
        id: "menuListSection"
    });
    var __alloyId12 = Widget.Collections["MenuItem"] || MenuItem;
    __alloyId12.on("fetch destroy change add remove reset", __alloyId13);
    var __alloyId14 = [];
    __alloyId14.push($.__views.menuListSection);
    $.__views.menuList = Ti.UI.createListView({
        sections: __alloyId14,
        templates: __alloyId2,
        id: "menuList",
        defaultItemTemplate: "menuDefault"
    });
    $.__views.menuList && $.addTopLevelView($.__views.menuList);
    doInit ? $.__views.menuList.addEventListener("init", doInit) : __defers["$.__views.menuList!init!doInit"] = true;
    doItemClick ? $.__views.menuList.addEventListener("itemclick", doItemClick) : __defers["$.__views.menuList!itemclick!doItemClick"] = true;
    exports.destroy = function() {
        __alloyId12.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var MenuItems = Widget.Collections.MenuItem;
    $.dlist.init($.menuList);
    __defers["$.__views.menuList!init!doInit"] && $.__views.menuList.addEventListener("init", doInit);
    __defers["$.__views.menuList!itemclick!doItemClick"] && $.__views.menuList.addEventListener("itemclick", doItemClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;