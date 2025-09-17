const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user.model");
const Donor = require("../../models/donor.model");
const Volunteer = require("../../models/volunteer.model");
const Admin = require("../../models/admin.model");
const BoardMember = require("../../models/boardMember.model");
const TeamMember = require("../../models/teamMember.model");

const ROLE_MODELS = {
  "User": User,
  "Donor": Donor,
  "Volunteer": Volunteer,
  "Admin": Admin,
  "BoardMember": BoardMember,
  "TeamMember": TeamMember
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let foundUser = null;
    let foundRole = null;

    for (const [role, Model] of Object.entries(ROLE_MODELS)) {
      const u = await Model.findOne({ email });
      if (u) {
        foundUser = u;
        foundRole = role;
        break;
      }
    }

    if (!foundUser) {
      return res.status(401).json({ status: 401, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json({ status: 401, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: foundUser._id, role: foundRole },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      status: 200,
      message: "Login successful",
      user: { id: foundUser._id, name: foundUser.name, email: foundUser.email, role: foundRole },
      token
    });

  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
