const express = require("express");
const { getUserInfo } = require("../controllers/linkServices");
const router = express.Router();

router.get("/getinfo/:link",getUserInfo)

module.exports = router;