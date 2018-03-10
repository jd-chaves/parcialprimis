const express = require("express");
const router = express.Router();

const tags = require("./hashtags");

router.use("/tags", tags);

module.exports = router;