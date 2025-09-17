const User = require("../../models/user.model");

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "Admin" });
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const admins = new User({ name, email, mobile, password, role: "Admin" });
    await admins.save();
    res.status(201).json(admins);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getAdminById  = (req,res)=>{

}