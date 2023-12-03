import Webinar from "../models/WebinarModel.js";

import path from "path";
import fs from "fs";
import generateUniqueId from "generate-unique-id";

export const getWebinars = async (req, res) => {
  try {
    const response = await Webinar.findAll();
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const getWebinarById = async (req, res) => {
  try {
    const response = await Webinar.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const createWebinar = async (req, res) => {
  console.log("BATA ATAS");
  console.log(req.body.title);
  console.log("BATA BAWAH");

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
      const response = await Webinar.create({
        ...req.body,
        webinar_img: url,
        id: generateUniqueId(),
      });
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
