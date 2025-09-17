const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  skills: [String], // special field for volunteers
  availability: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
