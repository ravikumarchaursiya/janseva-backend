const User = require("../../models/user.model");

exports.getAllBoardMembers = async (req, res) => {
  try {
    const donors = await User.find({ role: "boardMember" });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBoardMember = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const donor = new User({ name, email, mobile, password, role: "boardMember" });
    await donor.save();
    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getBoardMemberById = (req,res)=>{

}