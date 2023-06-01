const express = require("express");
const router = express.Router();

const userRoutes = require("../domains/user");
const userRoutesMongo = require("../domains/user-mongodb");

router.use("/user", userRoutes);
router.use("/usermongo", userRoutesMongo);

module.exports = router;
