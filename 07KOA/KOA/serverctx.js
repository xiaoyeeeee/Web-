const koa = require("koa");

let server = new koa();
server.listen(8080);
server.context.a = 1;

server.use(async(ctx, next) => {
    ctx.body = ctx.a;
    await next();
});