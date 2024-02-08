const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    shipping_charge: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  });

  module.exports = mongoose.model("Product",productSchema);