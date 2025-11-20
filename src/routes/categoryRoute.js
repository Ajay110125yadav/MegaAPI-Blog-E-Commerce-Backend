const express = require("express");
const { createCategory, getCategories } = require("../controllers/categoryController");
const router = express.Router();


router.post("/", createCategory);  // admin only later
router.get("/", getCategories);


module.exports = router;