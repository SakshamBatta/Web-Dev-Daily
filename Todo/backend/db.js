const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Saksham@1234",
  database: "todo",
  port: 3307,
});

module.exports = db;
