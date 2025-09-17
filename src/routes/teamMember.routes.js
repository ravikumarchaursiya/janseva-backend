const express = require("express");
const router = express.Router();
const teamMemberController = require("../controllers/users/teamMember.controller");

// Team Members
router.get("/", teamMemberController.getAllTeamMembers);
router.get("/:id", teamMemberController.getTeamMemberById);
router.post("/", teamMemberController.createTeamMember);

module.exports = router;
