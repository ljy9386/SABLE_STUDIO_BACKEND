require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const axios = require("axios");

dotenv.config();
console.log("🔑", `"${process.env.KAKAO_ADMIN_KEY}"`);

const app = express();
const session = require("express-session");
app.use(session({
  secret: "mySecretKey", // 아무 문자열
  resave: false,
  saveUninitialized: true,
}));
const PORT = process.env.PORT || 5000;

// ✅ 미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// ✅ 라우터f
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const wishlistRoutes = require("./routes/wishlist");
app.use("/api/wishlist", wishlistRoutes);

const cartRoutes = require("./routes/cart");
app.use("/api/cart", cartRoutes);

// ✅ 기본 페이지
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ MongoDB 연결
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB 연결 성공"))
  .catch((err) => console.error("❌ MongoDB 연결 실패", err));

const Order = require("./models/Order");

// ✅ 서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버 실행됨: http://localhost:${PORT}`);
});

const paymentRouter = require("./routes/payment");
app.use("/pay", paymentRouter);

app.get("/success", async (req, res) => {
  const pg_token = req.query.pg_token;
  const order_id = req.session.order_id || "";
  const user_id = req.session.user_id || "guest";

  console.log("🧩 세션 저장 완료:", {
  tid: req.session.tid,
  order_id: req.session.order_id,
  user_id: req.session.user_id
});

  try {
    const approval = await axios.post("https://kapi.kakao.com/v1/payment/approve",
      new URLSearchParams({
        cid: "TC0ONETIME",
        tid: req.session.tid,
        partner_order_id: req.session.order_id,  
        partner_user_id: req.session.user_id || "guest",
        pg_token,
      }),
      {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_ADMIN_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        }
      }
    );

    await Order.create({
      order_id,
      tid: approval.data.tid,
      item_name: approval.data.item_name,
      amount: approval.data.amount.total,
      user_id,
      date: new Date()
    });

    res.send(`
      <script>
        alert("결제가 정상적으로 완료되었습니다.");
        window.location.href = "/orderhistory.html";
      </script>
    `);
  } catch (err) {
    console.error("승인 실패:", err);
    res.status(500).send("결제 승인 실패");
  }
});

app.post("/refund", async (req, res) => {
  const { order_id } = req.body;

  console.log("✅ 환불 요청된 order_id:", req.body.order_id);

  const order = await Order.findOne({ order_id: req.body.order_id });

  if (!order) {
    console.log("❌ DB에서 해당 order_id를 찾을 수 없음.");
    return res.status(404).send("해당 주문을 찾을 수 없습니다.");
  }


  try {
    const response = await axios.post(
      "https://kapi.kakao.com/v1/payment/cancel",
      new URLSearchParams({
        cid: "TC0ONETIME",
        tid: order.tid,
        cancel_amount: order.amount,
        cancel_tax_free_amount: 0,
      }),
      {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_ADMIN_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.send("✅ 환불이 완료되었습니다!");
  } catch (err) {
    console.error("❌ 환불 실패:", err.response?.data || err.message);
    res.status(500).send("❌ 환불 처리 중 오류 발생");
  }
});