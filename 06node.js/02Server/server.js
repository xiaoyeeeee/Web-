/// <reference path="typings/globals/node/index.d.ts" />

const http = require("http");

http.createServer((req, res) => {

    res.write("node server");
    res.end();

}).listen(8080);