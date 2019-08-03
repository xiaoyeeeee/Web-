/// <reference path="./typings/modules/koa/index.d.ts" />

const koa = require("koa");
const router = require("koa-router");

let server = new koa();
server.listen(8080);

server.use((ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.body = "error";
    }
});

let routerMain = new router();
routerMain.all("*", async(ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.body = "出错了";
    }
});

routerMain.get("/", async ctx => {
    // if (!ctx.query.param) {
    //     ctx.throw(400, "param is required");
    // } else {
    //     ctx.body = "ok";
    // }

    // ctx.assert(ctx.query.param, 400, "param is required");
    // ctx.body = "ok";

    //// a未定义触发错误
    ctx.body = a;
})

server.use(routerMain.routes());