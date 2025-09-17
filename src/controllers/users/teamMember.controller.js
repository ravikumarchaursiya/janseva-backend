const User = require("../../models/user.model");

exports.getAllTeamMembers = async (req, res) => {
  try {
    const donors = await User.find({ role: "teamMember" });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTeamMember = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const donor = new User({ name, email, mobile, password, role: "teamMember" });
    await donor.save();
    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getTeamMemberById =(req,res)=>{

}