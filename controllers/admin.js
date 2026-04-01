import { product } from "../models/product.js";

export const dashboard = (req, res) => {
  res.render("admin/index");
};

export const newPost = (req, res) => {
  res.render("admin/new-post");
};

export const seeAllPosts = async (req, res) => {
  const data = await product.find();
  res.render("admin/posts", { posts: data });
};

export const AddProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      description_long,
      price,
      saleprice,
      category,
      stock_quantity,
    } = req.body;
    const imagePath = "/uploads/" + (req.file ? req.file.filename : null);

    const data = new product({
      title: name,
      description,
      description_long,
      price,
      saleprice,
      category,
      stock_quantity,
      image: imagePath,
    });

    await data.save();
    res.redirect("/posts/new"); // or wherever you want
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
    // res.render("addProduct", { error: "Something went wrong!" });
  }
};
export const editProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const {
      name,
      description,
      description_long,
      price,
      saleprice,
      stock_quantity,
    } = req.body;

    const imagePath = "/uploads/" + (req.file ? req.file.filename : null);

    await product.findByIdAndUpdate(id, {
      title: name,
      description,
      description_long,
      price,
      saleprice,
      stock_quantity,
      image: imagePath,
    });

    res.redirect("/posts");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await product.findByIdAndDelete(id);
    res.redirect("/posts");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await product.findById(id);
    res.render("admin/update-post", { post: data });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
