function Controller() {
    function toggleMenu() {
        drawer.toggleLeftWindow();
    }
    function notify() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menuDrawer = Ti.UI.createWindow({
        id: "menuDrawer",
        top: "20",
        backgroundColor: "#fff"
    });
    $.__views.menuDrawer && $.addTopLevelView($.__views.menuDrawer);
    $.__views.__alloyId13 = Alloy.createWidget("f.Menu", "widget", {
        id: "__alloyId13",
        __parentSymbol: $.__views.menuDrawer
    });
    $.__views.__alloyId13.setParent($.__views.menuDrawer);
    $.__views.centerWin = Ti.UI.createWindow({
        id: "centerWin"
    });
    $.__views.menu = Alloy.createWidget("f.MenuButton", "widget", {
        id: "menu",
        __parentSymbol: __parentSymbol
    });
    toggleMenu ? $.__views.menu.on("click", toggleMenu) : __defers["$.__views.menu!click!toggleMenu"] = true;
    $.__views.centerWin.leftNavButton = $.__views.menu.getViewEx({
        recurse: true
    });
    $.__views.ilist = Alloy.createWidget("com.svobik.InfiniteList", "widget", {
        id: "ilist",
        __parentSymbol: $.__views.centerWin
    });
    $.__views.ilist.setParent($.__views.centerWin);
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.centerWin,
        id: "nav"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    notify ? $.__views.nav.addEventListener("focus", notify) : __defers["$.__views.nav!focus!notify"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var NappDrawerModule = require("dk.napp.drawer");
    var drawer = NappDrawerModule.createDrawer({
        leftWindow: $.menuDrawer,
        centerWindow: $.nav,
        closeDrawerGestureMode: NappDrawerModule.CLOSE_MODE_ALL,
        openDrawerGestureMode: NappDrawerModule.OPEN_MODE_ALL,
        leftDrawerWidth: 260,
        fading: .2,
        parallaxAmount: .5,
        shadowWidth: "40dp"
    });
    var drawer;
    Ti.App.addEventListener("App:closeMenuDrawer", function() {
        drawer.toggleLeftWindow();
    });
    drawer.open();
    $.ilist.init();
    __defers["$.__views.menu!click!toggleMenu"] && $.__views.menu.on("click", toggleMenu);
    __defers["$.__views.nav!focus!notify"] && $.__views.nav.addEventListener("focus", notify);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;