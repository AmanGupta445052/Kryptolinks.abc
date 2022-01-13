const express = require("express");
const { getUserInfo, addTransactionInfo } = require("../controllers/linkServices");
const router = express.Router();

router.get("/getinfo/:link",getUserInfo)
router.post("/transaction/add",addTransactionInfo)

module.exports = router;