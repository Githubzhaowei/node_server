const connectSql = require("../mysql/connect");

async function login(params) {
    const account = params.account;
    const password = params.pass;
    let info;
    await connectSql(`select * from user_info where account="${account}" and password="${password}"`)
        .then((res) => {
            info = res;
        })
        .catch((err) => {
            info = err;
        });
    return info;
}

module.exports = login;
