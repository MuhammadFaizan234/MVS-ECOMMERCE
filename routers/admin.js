import express from "express";
import {
  dashboard,
  newPost,
  AddProduct,
  seeAllPosts,
  deleteProduct,
  updateProduct,
  editProduct,
} from "../controllers/admin.js";
import uplode from "../middleware/uplode.js";
import { auth } from "../middleware/auth.js";

const routeradmin = express.Router();

routeradmin.get("/dashboard", auth, dashboard);
routeradmin.get("/posts/new", auth, newPost);
routeradmin.post("/post", auth, uplode.single("image"), AddProduct);
routeradmin.get("/posts", auth, seeAllPosts);
routeradmin.get("/posts/update/:id", auth, updateProduct);
routeradmin.get("/posts/delete/:id", auth, deleteProduct);
routeradmin.post("/posts/edit/:id", auth, uplode.single("image"), editProduct);

export default routeradmin;
