import express from "express";
import cors from "cors";
import WebinarRoute from "./routes/WebinarRoute.js";
import AccountRoute from "./routes/AccountRoute.js";
import FileUpload from "express-fileupload";

const app = express();

app.use(cors());
app.use(FileUpload());
app.use(express.static("public"));
app.use(express.json());
app.use(WebinarRoute);
app.use(AccountRoute);

app.listen(5000, () => console.log("Server is running"));
