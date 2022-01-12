const express = require("express");
const { createLink } = require("../controllers/user");
const router = express.Router();

router.post("/user/create",createLink)

module.exports = router;