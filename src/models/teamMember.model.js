const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  department: String, // special field
  roleInTeam: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TeamMember", teamMemberSchema);
