const User = require("../../models/user.model");

// Get all normal users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "User" });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id, role: "User" });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const newUser = new User({ name, email, mobile, password, role: "User" });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
