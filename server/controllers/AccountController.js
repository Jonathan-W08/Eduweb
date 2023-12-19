import db from "../config/database.js";
import generateUniqueId from "generate-unique-id";

export const createAccount = async (req, res) => {
  try {
    const [rows, field] = await db.query(
      `SELECT * FROM account WHERE email='${req.body.email}'`
    );

    if (rows[0] !== undefined) {
      res
        .status(200)
        .json({ webinars_save: JSON.parse(rows[0].webinars_save) });
      return;
    }

    console.log("HALLO");

    const sql =
      "INSERT INTO account (id, name, email, profile_img, webinars_save) VALUES (?, ?, ?, ?, ?)";

    const uniqueId = generateUniqueId();
    const values = [
      uniqueId,
      req.body.name,
      req.body.email,
      req.body.profile_img,
      JSON.stringify([]),
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

export const saveWebinar = async (req, res) => {
  try {
    const id_webinar = req.body.id_webinar;

    const [rows, field] = await db.query(`SELECT webinars_save FROM account`);

    let data = JSON.parse(rows[0].webinars_save);
    const checkData = data.find((e) => e === id_webinar);

    const sql = `UPDATE account set name=?, email=?, profile_img=?, webinars_save=? WHERE id=?`;
    if (checkData) {
      const newData = data.filter((e) => e !== id_webinar);

      const values = [
        req.body.name,
        req.body.email,
        req.body.profile_img,
        JSON.stringify(newData),
        req.body.id,
      ];

      await db.query(sql, values);
      res.status(200).json({ id_webinar: id_webinar, saved: false });
    } else {
      data.push(id_webinar);
      console.log(data);
      const values = [
        req.body.name,
        req.body.email,
        req.body.profile_img,
        JSON.stringify(data),
        req.body.id,
      ];

      await db.query(sql, values);
      res.status(200).json({ id_webinar: id_webinar, saved: true });
    }
  } catch (err) {
    console.log(err);
  }
};
