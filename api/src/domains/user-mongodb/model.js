const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the schema for User model
var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  verified: Boolean,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
