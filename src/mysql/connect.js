const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "2wsx",
    port: "3306",
    database: "vacation_manage",
});

function searchSQL(sql) {
    // connection.connect();
    return new Promise(function (resolve, reject) {
        connection.query(sql, (err, res) => {
            if (err) {
                reject(err.message);
                console.log("[SELECT ERROR] - ", err.message);
            } else {
                resolve(res);
            }
        });
    });
    // connection.end();
}

module.exports = searchSQL;
