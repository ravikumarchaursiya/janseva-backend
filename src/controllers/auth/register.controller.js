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

exports.register = async (req, res) => {
  try {
    const { name, email, mobile, password, role } = req.body;

    if (!ROLE_MODELS[role]) {
      return res.status(400).json({ status: 400, message: "Invalid role" });
    }

    const Model = ROLE_MODELS[role];
    const existing = await Model.findOne({ email });
    if (existing) {
      return res.status(409 ).json({ status: 409, message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Model({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, role: role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      status: 201,
      message: "Registered successfully",
      user: { id: newUser._id, name: newUser.name, email: newUser.email, role },
      token
    });

  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
