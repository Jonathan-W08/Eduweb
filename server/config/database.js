import { Sequelize } from "sequelize";

const db = new Sequelize("db_eduweb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
