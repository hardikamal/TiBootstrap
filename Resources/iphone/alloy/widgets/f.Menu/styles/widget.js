function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "f.Menu/" + s : s.substring(0, index) + "/f.Menu/" + s.substring(index + 1);
    return path;
}

module.exports = [];