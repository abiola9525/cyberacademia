import {expressjwt} from "express-jwt";
import User from "../models/user";

var role = User.findById("role");
export const requireSignin = expressjwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

