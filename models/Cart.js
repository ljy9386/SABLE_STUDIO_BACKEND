const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  name: String,      // 상품명
  color: String,     // 색상
  price: Number,     // 가격
  size: String,      // 사이즈
  quantity: Number,  // 수량
  image: String      // 상품 이미지
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;