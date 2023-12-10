import express from "express";
import {
  createAccount,
  signInAccount,
} from "../controllers/AccountController.js";

const AccountRoute = express.Router();

AccountRoute.post("/login", createAccount);
AccountRoute.get("/login/check", signInAccount);

export default AccountRoute;
