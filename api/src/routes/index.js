const express = require("express");
const router = express.Router();

const userRoutes = require("../domains/user");
const albumRoutes = require("../domains/album");


router.use("/user", userRoutes);
router.use("/album", albumRoutes);


module.exports = router;
