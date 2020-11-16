const Router = require("koa-router");
const Login = require("./routers/Login");
const Home = require("./routers/Home")();
const jwt = require("jsonwebtoken");
const router = new Router();

const secret = "77sss899665255aasww"; //密钥，不能丢

router
    .post("/api/login", async (ctx, next) => {
        let Info = await Login(ctx.request.body);
        let code;
        let message;
        let userInfo = {};
        console.log(Info);
        if (Info.length > 0) {
            let payload = { userNumber: Info[0].account };
            let token = jwt.sign(payload, secret, { expiresIn: "1h" });
            code = 1;
            message = "登入成功";
            userInfo.name = Info[0].name;
            userInfo.sex = Info[0].sex;
            userInfo.account = Info[0].account;
            userInfo.email = Info[0].email;
            userInfo.mobile = Info[0].mobile;
            userInfo.token = token;
        } else {
            code = 0;
            message = "登入失败,用户信息不存在";
        }
        ctx.body = {
            code: code,
            userInfo: userInfo,
            message: message,
        };
    })
    .post("/home", async (ctx, next) => {
        ctx.body = {
            imgList: Home,
            stats: 1,
        };
    });
//   .post('/home', async (ctx, next) => {
//     ctx.body = {
//       img: a,
//       msg: 'ok',
//     };
//   })
//   .post('/home', async (ctx, next) => {
//     ctx.body = {
//       img: a,
//       msg: 'ok',
//     };
//   })
//   .post('/home', async (ctx, next) => {
//     ctx.body = {
//       img: a,
//       msg: 'ok',
//     };
//   });

module.exports = router.routes();
