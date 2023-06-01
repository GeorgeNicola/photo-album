const express = require("express");
const router = express.Router();

const { createUser, getAllUsers } = require("./controller");

router.use("/createUser", createUser);
router.use("/getAllUsers", getAllUsers);

module.exports = router;
