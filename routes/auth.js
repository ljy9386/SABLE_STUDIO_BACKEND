const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../models/User"); // 대소문자 정확히!

const router = express.Router();

// ✅ 회원가입
router.post("/signup", async (req, res) => {
  console.log("📩 회원가입 요청 도착!", req.body);

  try {
    const { user_id, name, email, password, address, phone, postalCode } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "모든 항목을 입력해주세요." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "이미 등록된 이메일입니다." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
  user_id,
  name,
  email,
  password: hashedPassword,
  address,
  phone,
  postalCode,
  tempPassword: null
});

    await newUser.save();
    console.log("회원가입 성공:", email);
    res.status(201).json({ message: "회원가입 성공!" });
  } catch (err) {
    console.error("회원가입 중 에러:", err);
    res.status(500).json({ message: "서버 오류. 다시 시도해주세요." });
  }
});

// ✅ 로그인
router.post("/login", async (req, res) => {
  console.log("로그인 요청 도착", req.body);

  try {
    const { user_id, password } = req.body;

    if (!user_id || !password) {
      return res.status(400).json({ message: "아이디와 비밀번호를 입력해주세요." });
    }

    const user = await User.findOne({ user_id });
    if (!user) {
      return res.status(401).json({ message: "아이디가 존재하지 않습니다." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    const isTempMatch = user.tempPassword
      ? await bcrypt.compare(password, user.tempPassword)
      : false;

    if (!isMatch && !isTempMatch) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    console.log("로그인 성공:", user_id);

    res.status(200).json({
      message: "로그인 성공!",
      user: {
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        postalCode: user.postalCode,
        isTempPassword: !!user.tempPassword
      }
    });

  } catch (err) {
    console.error("로그인 중 에러:", err);
    res.status(500).json({ message: "서버 오류. 다시 시도해주세요." });
  }
});

// ✅ 임시 비밀번호 발송
router.post("/send-temp-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "존재하지 않는 이메일입니다." });

    const tempPassword = crypto.randomBytes(4).toString("hex"); // 예: ab12cd34
    const hashed = await bcrypt.hash(tempPassword, 10);

    user.tempPassword = hashed; // 기존 비번은 유지하고 임시 비번만 별도 저장
    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"SABLESTUDIO Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "임시 비밀번호 안내",
      html: `
        <h3>안녕하세요, SABLESTUDIO입니다.</h3>
        <p>요청하신 임시 비밀번호는 다음과 같습니다:</p>
        <h2 style="color:#333">${tempPassword}</h2>
        <p>로그인 후 반드시 비밀번호를 변경해 주세요.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "임시 비밀번호를 이메일로 전송했습니다." });

  } catch (err) {
    console.error("임시 비밀번호 발송 에러:", err);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});

// ✅ 비밀번호 변경 라우터
router.post("/change-password", async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    if (!email || !currentPassword || !newPassword) {
      return res.status(400).json({ message: "모든 항목을 입력해주세요." });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "존재하지 않는 사용자입니다." });

    const isMatch =
      (await bcrypt.compare(currentPassword, user.password)) ||
      (user.tempPassword && await bcrypt.compare(currentPassword, user.tempPassword));

    if (!isMatch) {
      return res.status(401).json({ message: "현재 비밀번호가 일치하지 않습니다." });
    }

    // ✅ 비밀번호 변경
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    user.tempPassword = null; // ✅ 임시비밀번호 삭제
    await user.save();

    res.json({ message: "비밀번호가 성공적으로 변경되었습니다." });

  } catch (err) {
    console.error("비밀번호 변경 오류:", err);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
});


module.exports = router;
