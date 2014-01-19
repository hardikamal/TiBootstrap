function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "f.StreamItem/" + s : s.substring(0, index) + "/f.StreamItem/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
} ];