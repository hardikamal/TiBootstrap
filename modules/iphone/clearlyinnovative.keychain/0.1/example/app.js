// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// open a single window
var window = Ti.UI.createWindow({
    backgroundColor: 'white'
});
var label = Ti.UI.createLabel();
window.add(label);
window.open();

// TODO: write your module tests here
var keychain = require('clearlyinnovative.keychain');

keychain.setForKey({
    key: "name",
    value: "asaunders-two",
    serviceName: "MYAPPID"
},
function(data) {
    Ti.API.info(JSON.stringify(data));
});

keychain.getForKey({
    key: "name",
    serviceName: "MYAPPID"
},
function(data) {
    Ti.API.info(JSON.stringify(data));
});


// removeForKey
keychain.removeForKey({
    key: "name",
    serviceName: "MYAPPID"
},
function(data) {
    Ti.API.info(JSON.stringify(data));
});

// SHOULD ERROR SINCE WE REMOVED KEY
keychain.getForKey({
    key: "name",
    serviceName: "MYAPPID"
},
function(data) {
    Ti.API.info(JSON.stringify(data));
});
