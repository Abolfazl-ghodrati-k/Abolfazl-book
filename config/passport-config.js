import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Configure Passport.js for local authentication
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return done(null, false, { message: "Invalid username" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return done(null, false, { message: "Invalid password" });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

// JWT setup functions (generate and verify token)
const generateToken = (user) => {
  const payload = {
    sub: user._id,
    username: user.username,
  };
  return jwt.sign(payload, "your-secret-key", { expiresIn: "1h" });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, "your-secret-key");
  } catch (error) {
    return null;
  }
};

export {
  generateToken,
  verifyToken,
};
