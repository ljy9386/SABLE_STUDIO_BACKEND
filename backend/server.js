const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ 미들웨어 (반드시 라우터보다 먼저 선언!)
app.use(cors());
app.use(express.json());

// ✅ 라우터 등록 (항상 미들웨어 뒤에)
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// ✅ 기본 라우터 테스트용
app.get("/", (req, res) => {
  res.send("Minimal Dark Shop 서버 작동 중!");
});

// ✅ 서버 실행
app.listen(PORT, () => {
  console.log(`✅ 서버 실행됨: http://localhost:${PORT}`);
});

// ✅ MongoDB 연결
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB 연결 성공"))
  .catch((err) => console.error("❌ MongoDB 연결 실패", err));
