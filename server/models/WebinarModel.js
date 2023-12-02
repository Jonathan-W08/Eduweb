import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Webinar = db.define(
  "webinars",
  {
    id: { type: DataTypes.STRING, primaryKey: true },
    title: DataTypes.STRING,
    categories: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    penyelenggara: DataTypes.STRING,
    cost: DataTypes.STRING,
    profile_img: DataTypes.STRING,
    webinar_img: DataTypes.STRING,
  },
  { freezeTableName: true, engine: "InnoDB" }
);

export default Webinar;

(async () => {
  await db.sync();
})();
