const koa = require("koa");
const Router = require("koa-router");

let server = new koa();
server.listen(8080);


let router = new Router();
let routerParam = new Router();
let routerFather = new Router();
let routerChild = new Router();

routerChild.get("/c", async(ctx, next) => {
    ctx.body = "子级";
});

routerFather.get("/", async ctx => {
    ctx.body = "父级";
});

routerParam.get("/:id/", async ctx => {
    let str = JSON.stringify(ctx.params);
    ctx.body = `${str}`;
});

routerFather.use(routerChild.routes());
router.use("/f", routerFather.routes());
router.use("/p", routerParam.routes());

server.use(router.routes());