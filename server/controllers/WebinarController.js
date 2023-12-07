import db from "../config/database.js";

import path from "path";
import generateUniqueId from "generate-unique-id";

export const getWebinars = async (req, res) => {
  try {
    const [rows, fields] = await db.query(`SELECT * FROM webinars`);
    res.status(200).json(rows);
  } catch (err) {
    console.log(err.message);
  }
};

export const getWebinarById = async (req, res) => {
  try {
    const [rows, fields] = await db.query(
      `SELECT * FROM webinars WHERE id='${req.params.id}'`
    );
    res.status(200).json(rows);
  } catch (err) {
    console.log(err.message);
  }
};

export const createWebinar = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      const uniqueId = generateUniqueId();

      const sql = `INSERT INTO webinars (id, title, categories, date, time, penyelenggara, cost, profile_img, webinar_img)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const values = [
        uniqueId,
        req.body.title,
        req.body.categories,
        req.body.date,
        req.body.time,
        req.body.penyelenggara,
        req.body.cost,
        req.body.profile_img,
        url,
      ];

      await db.query(sql, values);

      res.status(201).json({ msg: "Webinar created" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateWebinar = async (req, res) => {
  try {
    await Webinar.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Webinar updated" });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteWebinar = async (req, res) => {
  try {
    await Webinar.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Webinar deleted" });
  } catch (err) {
    console.log(err.message);
  }
};
