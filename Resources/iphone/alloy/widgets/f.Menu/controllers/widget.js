function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "f.Menu/" + s : s.substring(0, index) + "/f.Menu/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function onClick(evt) {
        switch (evt.source.id) {
          case "restorePurchases":
            break;

          case "logout":
            break;

          case "feedback":
            var emailDialog = Titanium.UI.createEmailDialog();
            emailDialog.subject = "Feedback";
            emailDialog.toRecipients = [ "wienke@wappzapp.tv", "colin@wappzapp.tv" ];
            emailDialog.messageBody = "\n\r\n\r\n\r --- \n\rVersion: " + Ti.App.getVersion() + "\n\r" + "Phone model: " + Ti.Platform.model + "\n\r" + "OS: " + Ti.Platform.osname + " " + Ti.Platform.version + "\n\r";
            emailDialog.open();
            break;

          case "rate":
            break;

          case "faq":
            webviewUrl = "http://www.wappzapp.tv/app_pages/faq.html";
            break;

          case "tos":
            webviewUrl = "http://www.wappzapp.tv/app_pages/ipad/privacy.html";
            break;

          case "clearRecentlyWatched":
            C.getRecentlyWatched().reset();
            Alloy.createWidget("wz.Alert", {
                message: L("clear_watched_confirm")
            });
            break;

          case "send_a_tip":
            emailDialog = Titanium.UI.createEmailDialog();
            emailDialog.html = true;
            emailDialog.toRecipients = [ "tips@wappzapp.tv" ];
            emailDialog.subject = L("send_a_tip_subject");
            emailDialog.messageBody = "";
            emailDialog.open();
            break;

          case "email":
            webviewUrl = "http://www.wappzapp.tv/app_pages/newsletter.html";
            break;

          case "facebook":
            webviewUrl = "https://www.facebook.com/wappzapp";
            break;

          case "twitter":
            webviewUrl = "http://www.twitter.com/wappzapptv";
        }
        webviewUrl && Alloy.createWidget("wz.FullscreenWebView", {
            url: webviewUrl,
            title: "",
            cancelTitle: "",
            doneTitle: "Close"
        });
    }
    new (require("alloy/widget"))("f.Menu");
    this.__widgetId = "f.Menu";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.home = Ti.UI.createTableViewRow({
        title: L("home", "Home"),
        id: "home"
    });
    __alloyId0.push($.__views.home);
    $.__views.header = Ti.UI.createTableViewSection({
        headerTitle: L("menu_header", "Over Floor"),
        id: "header"
    });
    __alloyId0.push($.__views.header);
    $.__views.who_is = Ti.UI.createTableViewRow({
        title: L("who_is", "Wie is Floor?"),
        id: "who_is"
    });
    $.__views.header.add($.__views.who_is);
    $.__views.invite = Ti.UI.createTableViewRow({
        title: L("invite", "Nodig een vriendin uit"),
        id: "invite"
    });
    $.__views.header.add($.__views.invite);
    $.__views.facebook = Ti.UI.createTableViewRow({
        title: L("facebook", "Volg op Facebook"),
        id: "facebook"
    });
    $.__views.header.add($.__views.facebook);
    $.__views.twitter = Ti.UI.createTableViewRow({
        title: L("twitter", "Volg op Twitter"),
        id: "twitter"
    });
    $.__views.header.add($.__views.twitter);
    $.__views.email = Ti.UI.createTableViewRow({
        title: L("email", "Mailen"),
        id: "email"
    });
    $.__views.header.add($.__views.email);
    $.__views.faq = Ti.UI.createTableViewRow({
        title: L("faq", "Vragen?"),
        id: "faq"
    });
    $.__views.header.add($.__views.faq);
    $.__views.feedback = Ti.UI.createTableViewRow({
        title: L("feedback", "Feedback"),
        id: "feedback"
    });
    $.__views.header.add($.__views.feedback);
    $.__views.terms = Ti.UI.createTableViewRow({
        title: L("terms", "Voorwaarden"),
        id: "terms"
    });
    $.__views.header.add($.__views.terms);
    $.__views.menuTableView = Ti.UI.createTableView({
        data: __alloyId0,
        id: "menuTableView"
    });
    $.__views.menuTableView && $.addTopLevelView($.__views.menuTableView);
    onClick ? $.__views.menuTableView.addEventListener("click", onClick) : __defers["$.__views.menuTableView!click!onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menuTableView!click!onClick"] && $.__views.menuTableView.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;