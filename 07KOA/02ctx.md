# .NET 转前端基础知识笔记

## 1.ctx中有什么



## 2.ctx扩展
```javascript
const koa = require("koa");

let server = new koa();
server.listen(8080);
server.context.a = 1;

server.use(async(ctx, next) => {
    ctx.body = ctx.a;
    await next();
});
```
观察上面代码我们不难看出server.context是ctx的原型对象。我们可以在上面加任意我们需要的属性。
