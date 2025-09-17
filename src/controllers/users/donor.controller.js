const User = require("../../models/user.model");

exports.createDonor = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const donor = new User({ name, email, mobile, password, role: "Donor" });
    await donor.save();
    res.status(201).json(donor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getDonorById = (req, res) => {
    // your code here
};
exports.getAllDonors = async (req, res) => {
  try {
    const donors = await User.find({ role: "Donor" });
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

