const express = require("express");
const router = express.Router();
const adminController = require("../controllers/users/admin.controller");

// Admins
router.get("/", adminController.getAllAdmins);
router.get("/:id", adminController.getAdminById);
router.post("/", adminController.createAdmin);

module.exports = router;
