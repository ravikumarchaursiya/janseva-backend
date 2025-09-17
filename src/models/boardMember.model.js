const mongoose = require("mongoose");

const boardMemberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  position: String, // special field
  termStart: Date,
  termEnd: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("BoardMember", boardMemberSchema);
