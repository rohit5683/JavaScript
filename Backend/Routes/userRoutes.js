const express = require("express");
const { showSingleUser } = require("../Controllers/userController");

const router = express();

router.post("/show-user", showSingleUser);

module.exports = router;
