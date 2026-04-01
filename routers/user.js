import express from "express";
import { login, register, sigup, sigin } from "../controllers/user.js";

const routerlogin = express.Router();

routerlogin.get("/login", login);
routerlogin.get("/register", register);
routerlogin.post("/sigup", sigup);
routerlogin.post("/signin", sigin);

export default routerlogin;
