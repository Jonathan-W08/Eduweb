import express from "express";
import {
  getWebinars,
  getWebinarById,
  createWebinar,
  updateWebinar,
  deleteWebinar,
} from "../controllers/WebinarController.js";

const WebinarRoute = express.Router();

WebinarRoute.get("/", getWebinars);
WebinarRoute.get("/:id", getWebinarById);
WebinarRoute.post("/webinars", createWebinar);
WebinarRoute.patch("/webinars/:id", updateWebinar);
WebinarRoute.delete("/webinars/:id", deleteWebinar);

export default WebinarRoute;
