const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const AlbumSchema = new Schema({
  id: Number,
  name: String,
  currentPage: Number,
  pages: Array
});

const Album = model("Album", AlbumSchema);

module.exports = Album;
