const express = require("express");
const router = express.Router();
const donorController = require("../controllers/users/donor.controller");

// Donors
router.get("/", donorController.getAllDonors);
router.get("/:id", donorController.getDonorById);
router.post("/", donorController.createDonor);

module.exports = router;
