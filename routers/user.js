import express from "express";
import { login, register, sigup, sigin, signout } from "../controllers/user.js";

const routerlogin = express.Router();

routerlogin.get("/login", login);
routerlogin.get("/register", register);
routerlogin.post("/sigup", sigup);
routerlogin.post("/signin", sigin);
routerlogin.get("/signout", signout);

export default routerlogin;
