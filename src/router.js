const Router = require('koa-router');
const Login = require('./routers/Login');
const Home = require('./routers/Home');
const router = new Router();

router
  .post('/login', async (ctx, next) => {
    console.log(ctx);
    ctx.body = {
      img: 'a',
      msg: 'ok',
    };
  })
  .post('/home', async (ctx, next) => {
    ctx.body = {
      img: '/home/01_lc1_6663_resized.jpg',
      msg: 'ok',
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
