// 서버쪽 (cart.js 또는 cartRouter.js)

const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart'); // Cart 모델 생성 필요

// ✅ 장바구니에 상품 추가
router.post('/add', async (req, res) => {
  try {
    const newItem = new Cart(req.body);
    await newItem.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: '서버 에러' });
  }
});

// ✅ 장바구니 목록 조회
router.get('/', async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: '서버 에러' });
  }
});

module.exports = router;