const http = require("http");

http.createServer((req, res) => {
    console.log(req);

    //// 实现跨域  具体什么时候设置这个header 可以对req校验
    res.setHeader("access-control-allow-origin", "*");
    res.write("1231");
    res.end();
}).listen(8080);