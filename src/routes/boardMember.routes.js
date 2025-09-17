const express = require("express");
const router = express.Router();
const boardMemberController = require("../controllers/users/boardMember.controller");

// Board Members
router.get("/", boardMemberController.getAllBoardMembers);
router.get("/:id", boardMemberController.getBoardMemberById);
router.post("/", boardMemberController.createBoardMember);

module.exports = router;
