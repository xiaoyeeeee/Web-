const Koa = require('koa');

let server = new Koa();
server.listen(8080);

server.use(async(ctx, next) => {
    ctx.body = '第一步';
    await next();
});

server.use(async(ctx, next) => {
    ctx.body += '第二步';
});