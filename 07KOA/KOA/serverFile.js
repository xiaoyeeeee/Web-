/// <reference path="./typings/modules/koa/index.d.ts" />
const koa = require("koa");
const router = require("koa-router");
const static = require("koa-static");
const path = require("path");
const betterBody = require("koa-better-body");

let server = new koa();
server.listen(8080);

// let routerStatic = new router();

// routerStatic.all(/.html$/i, static(path.resolve(__dirname, "./static"), {
//     maxAge: 1 * 86400 * 1000
// }))

// server.use(routerStatic.routes())

server.use(betterBody({
    uploadDir: path.resolve(__dirname, "./static/upload")
}))

server.use(ctx => {
    console.log(path.resolve(__dirname, "./static/upload"));
    console.log(ctx.request.fields);
    ctx.body = "上传成功";
});