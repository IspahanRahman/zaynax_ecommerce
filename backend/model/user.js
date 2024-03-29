const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    }
  });

  module.exports = mongoose.model("User",userSchema);