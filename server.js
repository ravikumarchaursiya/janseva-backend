const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Import Routes
const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");
const donorRoutes = require("./src/routes/donor.routes");
const volunteerRoutes = require("./src/routes/volunteer.routes");
const adminRoutes = require("./src/routes/admin.routes");
const boardMemberRoutes = require("./src/routes/boardMember.routes");
const teamMemberRoutes = require("./src/routes/teamMember.routes");

// Use Routes with prefixes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/donors", donorRoutes);
app.use("/volunteers", volunteerRoutes);
app.use("/admins", adminRoutes);
app.use("/board-members", boardMemberRoutes);
app.use("/team-members", teamMemberRoutes);

// DB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
