const Router = require('koa-router'); //路由

let router = new Router();

router
    .post('/upload', async (ctx, next) => {
        console.log('上传成功');
        ctx.body = 'ok';
    })
    .get('/', async (ctx) => {
        ctx.body = {
            token: 'abc',
            msg: 'ok',
        };
    })
    .post('/add', async (ctx) => {
        ctx.req.on('data', (data) => {
            console.log(data);
            console.log(data.toString());
        });
        ctx.body = 'post ok';
    });
module.exports = router.routes();
