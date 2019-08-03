const koa = require("koa");
const mysql = require("mysql");
const co = require("co-mysql");

//// 最好把这一坨仍外面去然后server.context.db = 引用你的模块
let coon = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "smallq",
    database: "nodejstest"
});

let db = co(coon);
let server = new koa();
server.listen(8080);


server.context.db = db;
server.use(async ctx => {
    let data = await ctx.db.query("SELECT * FROM NODETEST");
    console.log(data);
})