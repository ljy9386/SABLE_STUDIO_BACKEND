const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User"); // 대소문자 정확히!

const router = express.Router();

// ✅ 회원가입 라우터
router.post("/signup", async (req, res) => {
  console.log("📩 회원가입 요청 도착!", req.body);

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "모든 항목을 입력해주세요." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "이미 등록된 이메일입니다." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("✅ 회원가입 성공:", email);
    res.status(201).json({ message: "회원가입 성공!" });
  } catch (err) {
    console.error("❌ 회원가입 중 에러:", err);
    res.status(500).json({ message: "서버 오류. 다시 시도해주세요." });
  }
});

// ✅ 로그인 라우터
router.post("/login", async (req, res) => {
  console.log("🔐 로그인 요청 도착!", req.body);

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "이메일과 비밀번호를 입력해주세요." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "이메일이 존재하지 않습니다." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    console.log("✅ 로그인 성공:", email);
    res.status(200).json({ message: "로그인 성공!" });
  } catch (err) {
    console.error("❌ 로그인 중 에러:", err);
    res.status(500).json({ message: "서버 오류. 다시 시도해주세요." });
  }
});

module.exports = router;
