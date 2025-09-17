const User = require("../../models/user.model");

// Get all volunteers
exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await User.find({ role: "Volunteer" });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a volunteer
exports.createVolunteer = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const volunteer = new User({ name, email, mobile, password, role: "Volunteer" });
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getVolunteerById = (req,res)=>{
    
}
