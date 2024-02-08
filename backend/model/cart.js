const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_id:{
        type: String, 
        required: true 
    },
    product_id: {
      type: String,
      required: true,
    },
  });

  module.exports = mongoose.model("Cart",cartSchema);