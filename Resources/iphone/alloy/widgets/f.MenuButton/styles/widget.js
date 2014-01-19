function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "f.MenuButton/" + s : s.substring(0, index) + "/f.MenuButton/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isId: true,
    priority: 100000.0028,
    key: "container",
    style: {
        width: Ti.UI.SIZE,
        height: 44
    }
}, {
    isId: true,
    priority: 100000.0031,
    key: "badge",
    style: {
        text: " ",
        top: 4,
        left: 16,
        width: 14,
        height: 14,
        font: {
            fontSize: 10,
            fontWeight: "bold"
        },
        color: "#fff",
        backgroundColor: "#f00",
        textAlign: "center",
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "#f00",
        visible: false
    }
}, {
    isId: true,
    priority: 100101.0029,
    key: "button",
    style: {
        width: 20,
        height: 20
    }
} ];