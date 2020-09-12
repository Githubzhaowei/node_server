const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2wsx',
  port: '3306',
  database: 'vacation-manage',
});

searchSQL = (sql) => {
  connection.connect();
  connection.query(sql, function (err, res) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    console.log('数据库查的结果：');
    console.log(res);
  });

  connection.end();
};

addSQL = (sql) => {
  connection.connect();
  connection.query(sql, function (err, res) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    console.log('数据库查的结果：');
    console.log(res);
  });

  connection.end();
};

deletSQL = (sql) => {
  connection.connect();
  connection.query(sql, function (err, res) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    console.log('数据库查的结果：');
    console.log(res);
  });

  connection.end();
};

updateSQL = (sql) => {
  connection.connect();
  connection.query(sql, function (err, res) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return;
    }
    console.log('数据库查的结果：');
    console.log(res);
  });

  connection.end();
};

module.exports = {
  searchSQL: searchSQL,
  addSQL: addSQL,
  deletSQL: deletSQL,
  updateSQL: updateSQL,
};
