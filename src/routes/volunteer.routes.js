const express = require("express");
const router = express.Router();
const volunteerController = require("../controllers/users/volunteer.controller");

// Volunteers
router.get("/", volunteerController.getAllVolunteers);
router.get("/:id", volunteerController.getVolunteerById);
router.post("/", volunteerController.createVolunteer);

module.exports = router;
