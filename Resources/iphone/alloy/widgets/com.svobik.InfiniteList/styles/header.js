function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.svobik.InfiniteList/" + s : s.substring(0, index) + "/com.svobik.InfiniteList/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100100.0023,
    key: "headerView",
    style: {
        backgroundColor: "grey"
    }
}, {
    isId: true,
    priority: 100100.0024,
    key: "hvActivityIndicator",
    style: {
        left: 35,
        bottom: 15,
        width: 30,
        height: 30
    }
}, {
    isId: true,
    priority: 100100.0025,
    key: "hvImage",
    style: {
        left: 35,
        bottom: 5,
        image: WPATH("images/arrow.png"),
        height: 60,
        width: 23
    }
}, {
    isId: true,
    priority: 100100.0026,
    key: "hvMessage",
    style: {
        color: "#fff",
        font: {
            fontSize: 12,
            fontWeight: "bold"
        },
        textAlign: "center",
        bottom: 30
    }
}, {
    isId: true,
    priority: 100100.0027,
    key: "hvTimestamp",
    style: {
        color: "#fff",
        font: {
            fontSize: 11
        },
        textAlign: "center",
        bottom: 15
    }
} ];