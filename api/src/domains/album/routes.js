const express = require("express");
const router = express.Router();

const { createAlbum, getAlbum, updateAlbum, getAllAlbums } = require("./controller");


router.use("/createAlbum", createAlbum)
router.use("/getAlbum/:id", getAlbum);
router.use("/updateAlbum/:id", updateAlbum);
router.use("/getAllAlbums", getAllAlbums);

module.exports = router;
