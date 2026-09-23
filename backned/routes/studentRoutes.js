const express = require("express");
const router = express.Router();
const { addStudent } = require("../controllers/studentControllers");
router.post("/", addStudent);
module.exports = router;