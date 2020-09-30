const Router = require('koa-router');
const Login = require('./routers/Login');
const Home = require('./routers/Home')();
const router = new Router();
const connectSql = require('./mysql/connect');

router
  .post('/login', async (ctx, next) => {
    ctx.body = {};
    connectSql('select * from user;');
    console.log(ctx.request.body);
  })
  .post('/home', async (ctx, next) => {
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
