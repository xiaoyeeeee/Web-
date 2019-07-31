const koa = require('koa');
const session = require("koa-session");

let server = new koa();
server.listen(8080);

//// 强制签名
server.keys = ["1231241wqefqw4", "1dewqfq"];

server.use(
    session({
        maxAge: 30 * 60 * 1000,
        renew: true
    }, server)
);

server.use(async ctx => {
    if (!ctx.session['count']) {
        ctx.session['count'] = 1;
        console.log(`第${ ctx.session['count']}次`);
    }

    ctx.session['count']++;
    console.log(`第${ ctx.session['count']}次`);
})