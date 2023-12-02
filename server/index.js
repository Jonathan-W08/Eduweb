import express from "express";
import cors from "cors";
import WebinarRoute from "./routes/WebinarRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(WebinarRoute);

app.listen(5000, () => console.log("Server is running"));
