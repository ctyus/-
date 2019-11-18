const sql = require('mysql');

class MysqlModle {
  constructor() {
    this.sql = sql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'comic world',
      port: 3306,
      multipleStatements: true
    });
    this.sql.connect();
  }
  end() {
    this.sql.end();
  }
}
module.exports = MysqlModle;