function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "f.Menu/" + s : s.substring(0, index) + "/f.Menu/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0004,
    key: "terms",
    style: {
        title: L("terms", "Voorwaarden")
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "home",
    style: {
        title: L("home", "Home")
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "header",
    style: {
        headerTitle: L("menu_header", "Over Floor")
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "who_is",
    style: {
        title: L("who_is", "Wie is Floor?")
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "faq",
    style: {
        title: L("faq", "Vragen?")
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "feedback",
    style: {
        title: L("feedback", "Feedback")
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "facebook",
    style: {
        title: L("facebook", "Volg op Facebook")
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "twitter",
    style: {
        title: L("twitter", "Volg op Twitter")
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "email",
    style: {
        title: L("email", "Mailen")
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "invite",
    style: {
        title: L("invite", "Nodig een vriendin uit")
    }
} ];