const User = require("../models/usermodel");
const jwt = require("jsonwebtoken");

// JWT create karne ka helper
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// Signup controller

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // agar user already exist karta ho
    const exist = await User.findOne({ email });
    if (!email) {
      return res.status(400).json({ message: "Email already exists" });
  }

  const user = await User.create({ name, email, password });

  res.status(201).json({
    message: "Signup successful",
    token: generateToken(user._id),
    user,
  });
} catch (error) {
  res.status(500).json({ message: "Error in signup", error });
}
};

// Logic controller.

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {return res.status(400).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: " Invalid email or password" });
  }

  res.json({
    message: "Login successful",
    token: generateToken(user._id),
    user,
  });
} catch (error) {
  res.status(500).json({ message: "Error in login", error});
}
};