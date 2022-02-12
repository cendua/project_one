import mysql from "mysql";

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "project_one",
});

export default db;
