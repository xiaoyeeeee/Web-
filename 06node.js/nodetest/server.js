const http = require("http");
const url = require("url");

http.createServer(function(req, res) {
    let { pathname, query } = url.parse(req.url, true);
    console.log(pathname);
    console.log(query);
}).listen(8080);