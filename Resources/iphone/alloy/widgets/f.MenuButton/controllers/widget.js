function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "f.MenuButton/" + s : s.substring(0, index) + "/f.MenuButton/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function onClick(evt) {
        $.trigger("click", evt);
    }
    function onTouchStart() {
        $.active ? setInactive() : setActive();
    }
    function onTouchEnd() {
        $.active ? setInactive() : setActive();
    }
    function setActive() {
        $.button.image = WPATH("/images/" + $.type + "_active.png");
        $.active = true;
    }
    function setInactive() {
        $.button.image = WPATH("/images/" + $.type + ".png");
        $.active = false;
    }
    new (require("alloy/widget"))("f.MenuButton");
    this.__widgetId = "f.MenuButton";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: 44,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    onClick ? $.__views.container.addEventListener("click", onClick) : __defers["$.__views.container!click!onClick"] = true;
    onTouchStart ? $.__views.container.addEventListener("touchstart", onTouchStart) : __defers["$.__views.container!touchstart!onTouchStart"] = true;
    onTouchEnd ? $.__views.container.addEventListener("touchend", onTouchEnd) : __defers["$.__views.container!touchend!onTouchEnd"] = true;
    onTouchEnd ? $.__views.container.addEventListener("touchcancel", onTouchEnd) : __defers["$.__views.container!touchcancel!onTouchEnd"] = true;
    $.__views.button = Ti.UI.createImageView({
        width: 20,
        height: 20,
        id: "button"
    });
    $.__views.container.add($.__views.button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.type = "hamburger";
    $.button.image = WPATH("/images/" + $.type + ".png");
    __defers["$.__views.container!click!onClick"] && $.__views.container.addEventListener("click", onClick);
    __defers["$.__views.container!touchstart!onTouchStart"] && $.__views.container.addEventListener("touchstart", onTouchStart);
    __defers["$.__views.container!touchend!onTouchEnd"] && $.__views.container.addEventListener("touchend", onTouchEnd);
    __defers["$.__views.container!touchcancel!onTouchEnd"] && $.__views.container.addEventListener("touchcancel", onTouchEnd);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;