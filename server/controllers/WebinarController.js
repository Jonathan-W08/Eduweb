import Webinar from "../models/WebinarModel.js";

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
  try {
    const response = await Webinar.create(req.body);
    res.status(201).json({ msg: "Webinar created" });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateWebinar = async (req, res) => {
  try {
    const response = await Webinar.update(req.body, {
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
    const response = await Webinar.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Webinar deleted" });
  } catch (err) {
    console.log(err.message);
  }
};
