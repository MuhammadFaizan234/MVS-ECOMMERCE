import express from "express";
import path from "node:path";
import pageRouter from "./routers/page.js";
import routerlogin from "./routers/user.js";
import routeradmin from "./routers/admin.js";
import { fileURLToPath } from "node:url";
import connectDB from "./configs/db.js";
import dotenv from "dotenv";
import session from "express-session";

dotenv.config();

const app = express();

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
  }),
);

app.set("view engine", "ejs");

app.use(pageRouter);
app.use(routerlogin);
app.use(routeradmin);

export default app;
