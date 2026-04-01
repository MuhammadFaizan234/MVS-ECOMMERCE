import express from "express";
import {
  about,
  home,
  contact,
  shop,
  detail,
  checkout,
  cart,
  blog,
  single,
} from "../controllers/page.js";

const router = express.Router();

router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
router.get("/shop", shop);
router.get("/product/:id", detail);
router.get("/checkout", checkout);
router.get("/cart", cart);
router.get("/blog", blog);
router.get("/shop/:id", single);

export default router;
