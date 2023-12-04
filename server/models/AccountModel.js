import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Account = db.define(
  "account",
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    profile_img: DataTypes.STRING,
  },
  { freezeTableName: true, engine: "InnoDB" }
);

export default Account;

(async () => {
  await db.sync();
})();
