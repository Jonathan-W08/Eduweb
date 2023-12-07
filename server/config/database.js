import mysqlPromise from "mysql2/promise.js";

const db = mysqlPromise.createPool({
  host: "localhost",
  user: "root",
  database: "db_eduweb",
});

export default db;
