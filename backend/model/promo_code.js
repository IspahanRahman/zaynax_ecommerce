const mongoose = require('mongoose');

const promoCodeSchema = new mongoose.Schema({
    promo_code: {
      type: String,
      required: true,
      unique: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    discount_rate: {
      type: Number,
      required: true,
    },
    use_time: {
      type: Number,
    },
    status: {
      type: Boolean,
      required: true,
    },
  });

  module.exports = mongoose.model("PromoCode",promoCodeSchema);