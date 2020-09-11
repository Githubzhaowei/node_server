const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
let router = new Router();

const pathName = './assets/home';
// var dirs = [];
let a;

// fs.readdir(pathName, function (err, files) {
//     (function iterator(i) {
//         if (i == files.length) {
//             console.log(dirs);
//             return;
//         }
//         fs.stat(path.join(pathName, files[i]), function (err, data) {
//             if (data.isFile()) {
//                 dirs.push(files[i]);
//             }
//             iterator(i + 1);
//         });
//     })(0);
// });
fs.readFile('./assets/home/01_lc1_6663_resized.jpg', function (
    err,
    data
) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        a = data;
    }
});
router.get('/home', async (ctx, next) => {
    ctx.body = {
        img: a,
        msg: 'ok',
    };
});

module.exports = router.routes();
