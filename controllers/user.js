import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const login = (req, res) => {
  res.render("login");
};

export const register = (req, res) => {
  res.render("register");
};

export const sigin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.send("user not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.send("invalid password");
    }

    req.session.user = {
      id: user._id,
      email: user.email,
    };

    res.redirect("/dashboard");
  } catch (error) {
    res.send(`error logging in: ${error.message}`);
  }
};

export const sigup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      res.send("user already exists");
    }

    const newpassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: newpassword,
    });

    await newUser.save();

    res.redirect("/login");
  } catch (error) {
    res.send(`error creating user: ${error.message}`);
  }
};
