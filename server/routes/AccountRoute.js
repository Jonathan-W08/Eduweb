import express from "express";
import { createAccount } from "../controllers/AccountController.js";

const AccountRoute = express.Router();

AccountRoute.post("/login", createAccount);

export default AccountRoute;
