var pg = require("pg");
var pool = new pg.Pool({
  user: "postgres",
  password: "    ",
  host: "localhost",
  port: 5432,
  database: "     ",
  ssl: false
});

module.exports = pool;
