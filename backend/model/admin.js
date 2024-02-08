const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    user_id: {
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

  module.exports = mongoose.model("User",adminSchema);