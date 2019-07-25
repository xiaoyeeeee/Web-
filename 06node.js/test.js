const http = require('http');

let server = http.createServer(function (req, res) {
    console.log("node.js服务测试");

});
server.listen(8080);