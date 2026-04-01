import { product } from "../models/product.js";

export const home = (req, res) => {
  res.render("index");
};
export const about = (req, res) => {
  res.render("about");
};
export const contact = (req, res) => {
  res.render("contact");
};
export const shop = async (req, res) => {
  const data = await product.find();

  res.render("shop", { products: data });
};
export const detail = (req, res) => {
  res.render("product-single");
};
export const checkout = (req, res) => {
  res.render("checkout");
};
export const cart = (req, res) => {
  res.render("cart");
};
export const blog = (req, res) => {
  res.render("blog");
};
export const single = async (req, res) => {
  const data = await product.findById(req.params.id);

  res.render("product-single", { singel: [data] });
};
