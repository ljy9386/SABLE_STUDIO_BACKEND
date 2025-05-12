const express = require("express");
const router = express.Router();
const wishlist = require("../models/wishlist");

// [GET] 위시리스트 목록 조회
router.get("/", async (req, res) => {
  try {
    const items = await wishlist.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// [POST] 위시리스트 추가
router.post("/add", async (req, res) => {
  const { name, image, price, size, color } = req.body;
  try {
    const exists = await wishlist.findOne({ name, size, color });
    if (exists) return res.status(200).json({ success: false, message: "이미 위시리스트에 있음" });

    const newItem = new wishlist({ name, image, price, size, color });
    await newItem.save();
    res.json({ success: true, message: "추가 완료" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// [POST] 위시리스트 삭제
router.post("/delete", async (req, res) => {
  const { id } = req.body;
  try {
    const deleted = await wishlist.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "삭제 대상 없음" });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
