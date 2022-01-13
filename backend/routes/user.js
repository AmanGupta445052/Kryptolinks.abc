const express = require("express");
const { createLink, getInfo } = require("../controllers/user");
const router = express.Router();

router.post("/user/create",createLink)
router.get("/user/get/:username",getInfo)

module.exports = router;