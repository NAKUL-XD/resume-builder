import user from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// Token creator
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = createToken(existingUser._id);
    res.json({
      success: true,
      token,
      user: {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error logging in user",
    });
  }
};

// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await user.findOne({ email });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new user({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      token: createToken(savedUser._id),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error registering user",
    });
  }
};

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const foundUser = await user.findById(req.user.id).select("-password");
    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(foundUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error finding user",
    });
  }
};

export { loginUser, registerUser, getUserProfile };
