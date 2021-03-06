const Koa = require("koa");
const bodyparser = require("koa-bodyparser"); //用于接收并解析前台发送过来的post数据
const path = require("path");
const fs = require("fs"); //文档操作
const Router = require("koa-router"); //路由
const formidable = require("koa-formidable"); // 处理文字和文件的请求体数据
const cors = require("koa2-cors"); //用来解决前端的跨域
const staticFiles = require("koa-static");
const routers = require("./src/router");

let app = new Koa();
let router = new Router();
app.use(bodyparser());
// 这是处理前端跨域的配置
app.use(
    cors({
        origin: function (ctx) {
            if (ctx.url === "/") {
                return "*"; // 允许来自所有域名请求
            }
            return "http://127.0.0.1:8088";
        },
        exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
        maxAge: 5,
        credentials: true,
        allowMethods: ["GET", "POST", "DELETE"],
        allowHeaders: ["Content-Type", "Authorization", "Accept"],
    })
);

// app.use(async (ctx, next) => {
//     var formidable = require('formidable');
//     var form = new formidable.IncomingForm();
//     form.uploadDir = path.resolve('./');
//     form.keepExtensions = true;
//     form.parse(ctx.req, function (err, fields, files) {
//         console.log(files);
//     });

//     form.onPart = function (part) {
//         part.addListener('data', function (data) {
//             require('fs').appendFileSync('./4.mp3', data);
//         });
//     };

//     await next();
// });

app.use(async (ctx, next) => {
    ctx.response.set("Access-Control-Allow-Origin", "*");
    ctx.response.set("Access-Control-Allow-Origin", ctx.request.header.origin);
    ctx.response.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    ctx.response.set("Access-Control-Allow-Headers", "token");
    ctx.response.set("Access-Control-Allow-Credentials", true);

    await next();
});
app.use(staticFiles(__dirname + "/assets"));

router.use(routers);
app.use(router.routes());

// 开启服务器
app.listen(3000, "127.0.0.1", () => {
    console.log("服务器启动在3000端口");
});
