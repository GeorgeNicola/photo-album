const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

const User = model("User", UserSchema);

module.exports = User;
