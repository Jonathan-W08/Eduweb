import express from "express";
import {
  createAccount,
  saveWebinar,
  signInAccount,
} from "../controllers/AccountController.js";

const AccountRoute = express.Router();

AccountRoute.post("/login", createAccount);
AccountRoute.get("/login/check", signInAccount);
AccountRoute.patch("/save-webinar", saveWebinar);

export default AccountRoute;
