import user from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await user.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found with this token" });
      }

      next();
    } else {
      res.status(401).json({ message: "Not authorized, no token found" });
    }
  } catch (error) {
    res.status(401).json({
      message: "Token failed or invalid",
      error: error.message,
    });
  }
};
