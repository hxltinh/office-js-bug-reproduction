var fs = require("fs");

module.exports = {
	cert: fs.readFileSync("certs/server.crt"),
	key: fs.readFileSync("certs/server.key")
};