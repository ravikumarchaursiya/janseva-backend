const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  permissions: [String], // special field for admin
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Admin", adminSchema);
