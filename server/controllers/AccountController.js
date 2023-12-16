import db from "../config/database.js";
import generateUniqueId from "generate-unique-id";

export const createAccount = async (req, res) => {
  try {
    const [rows, field] = await db.query(
      `SELECT * FROM account WHERE email='${req.body.email}'`
    );

    if (rows[0] !== undefined) {
      return;
    }

    const sql =
      "INSERT INTO account (id, name, email, profile_img) VALUES (?, ?, ?, ?)";

    const uniqueId = generateUniqueId();
    const values = [
      uniqueId,
      req.body.name,
      req.body.email,
      req.body.profile_img,
    ];

    await db.query(sql, values);
  } catch (err) {
    console.log(err);
  }
};

export const signInAccount = async (req, res) => {
  try {
    const [rows, field] = await db.query(`SELECT * FROM account`);

    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
  }
};
