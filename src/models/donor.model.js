const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  donationHistory: [{ amount: Number, date: Date }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donor", donorSchema);
