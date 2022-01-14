const express = require("express");
const { createLink, getInfo, updateProfile } = require("../controllers/user");
const router = express.Router();

router.post("/user/create",createLink)
router.get("/user/get/:username",getInfo)
router.post("/user/update",updateProfile)

module.exports = router;