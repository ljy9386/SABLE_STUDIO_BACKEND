const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: String,
  name: String,
  phone: String,
  address: String,
  postalCode: String,
  tempPassword: String
});

module.exports = mongoose.model("User", userSchema);
