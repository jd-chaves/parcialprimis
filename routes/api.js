const express = require("express");
const router = express.Router();

const hashtags = require("./hashtags");

router.use("/hashtags", hashtags);

module.exports = router;
