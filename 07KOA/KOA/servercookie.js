const koa = require("koa");
const router = require("koa-router");

let server = new koa();
server.listen(8080);

server.keys = [
    "qwfwfwefqewqqe",
    "qwdqdqwdwffvwfvfgb",
];

server.use(async ctx => {
    // ctx.cookies.set("user", "fangtangjing", {
    //     maxAge: 86400 * 1000,
    //     signed: true
    // });

    let cookie = ctx.cookies.get("user", { signed: true });
    console.log(cookie);
});