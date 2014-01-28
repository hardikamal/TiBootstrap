function Controller() {
    function toggleMenu() {
        $.drawer.toggleLeftWindow();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId26 = Ti.UI.createWindow({
        title: "Main List",
        width: 1400,
        role: "leftWindow",
        id: "__alloyId26"
    });
    $.__views.__alloyId27 = Alloy.createWidget("f.Menu", "widget", {
        id: "__alloyId27",
        __parentSymbol: $.__views.__alloyId26
    });
    $.__views.__alloyId27.setParent($.__views.__alloyId26);
    $.__views.__alloyId29 = Ti.UI.createWindow({
        title: "Main List",
        width: 1400,
        id: "__alloyId29"
    });
    $.__views.menu = Alloy.createWidget("f.MenuButton", "widget", {
        id: "menu",
        __parentSymbol: __parentSymbol
    });
    toggleMenu ? $.__views.menu.on("click", toggleMenu) : __defers["$.__views.menu!click!toggleMenu"] = true;
    $.__views.__alloyId29.leftNavButton = $.__views.menu.getViewEx({
        recurse: true
    });
    $.__views.Stream = Alloy.createController("stream", {
        id: "Stream",
        __parentSymbol: $.__views.__alloyId29
    });
    $.__views.Stream.setParent($.__views.__alloyId29);
    $.__views.__alloyId28 = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId29,
        role: "centerWindow",
        id: "__alloyId28"
    });
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        id: "drawer",
        children: [ $.__views.__alloyId26, $.__views.__alloyId28 ],
        __parentSymbol: __parentSymbol
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.drawer.open();
    arguments[0] || {};
    __defers["$.__views.menu!click!toggleMenu"] && $.__views.menu.on("click", toggleMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;