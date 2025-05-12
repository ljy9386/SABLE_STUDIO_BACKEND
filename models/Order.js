const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: String,
  tid: String,
  item_name: String,
  amount: Number,
  user_id: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);