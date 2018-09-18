const liveServer = require("live-server");
const yargs = require('yargs').argv;


var params = {
    port: 9999,
    root: 'app',
    open: false,
    https: "live-server-https-module.js",
    wait: 1000,
};

liveServer.start(params);
