const koa = require("koa");

let server = new koa();
server.listen(8080);
//server.context.a = 1;

server.use(async (ctx, next) => {
    //ctx.body = ctx.a;
    // await next();
    console.log("header:" + ctx.header);
    console.log("method:" + ctx.method);
    console.log("url:" + ctx.url);
    console.log("href:" + ctx.href);
    console.log("path:" + ctx.path);
    console.log("querystring:" + ctx.querystring);
    console.log("host:" + ctx.host);
});