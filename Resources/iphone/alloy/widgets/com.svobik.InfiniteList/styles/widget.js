function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.svobik.InfiniteList/" + s : s.substring(0, index) + "/com.svobik.InfiniteList/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0005,
    key: "Label",
    style: {
        color: "#000",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "heading",
    style: {
        top: 130,
        font: {
            fontSize: 18,
            fontWeight: "bold"
        }
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "excerpt",
    style: {
        top: 150,
        font: {
            fontSize: 12
        }
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "poster",
    style: {
        top: 0,
        width: "100%"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "imageContainer",
    style: {
        top: 0,
        height: 125,
        width: "100%",
        borderRadius: 0
    }
} ];