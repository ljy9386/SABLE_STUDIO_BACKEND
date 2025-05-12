const express = require('express');
const router = express.Router();
const axios = require('axios');
const Order = require("../models/Order");

require('dotenv').config();
console.log("🧪 Authorization 헤더:", `KakaoAK ${process.env.KAKAO_ADMIN_KEY}`);

// ✅ 연결 테스트용 라우터 (프론트 fetch("/pay/test") 확인용)
router.get("/test", (req, res) => {
  res.json({ success: true, message: "라우터 정상 연결됨" });
});

// ✅ 카카오페이 결제 요청 라우터
router.post('/', async (req, res) => {
  try { 
    const orderId = Date.now(); // ✅ 1. 먼저 생성

    const response = await axios.post(
      "https://kapi.kakao.com/v1/payment/ready",
      new URLSearchParams({
        cid: "TC0ONETIME",
        partner_order_id: orderId,  // ✅ 여기 수정됨
        partner_user_id: req.body.user_id || "guest",
        item_name: req.body.item_name,
        quantity: req.body.quantity,
        total_amount: req.body.total_amount,
        vat_amount: 0,
        tax_free_amount: 0,
        approval_url: `http://localhost:5000/success`,
        cancel_url: "http://localhost:5000/cancel",
        fail_url: "http://localhost:5000/fail"
      }),
      {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_ADMIN_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      }
    );

    // ✅ 카카오에 넘긴 orderId와 동일하게 세션 저장
    req.session.tid = response.data.tid;
    req.session.order_id = orderId;
    req.session.user_id = req.body.user_id || "guest";

    console.log("✅ 카카오 응답:", response.data);
    console.log("🔗 리디렉션 URL:", response.data.next_redirect_pc_url);
    res.json({
      redirect_url: response.data.next_redirect_pc_url
    });

  } catch (err) {
    console.error("❌ 결제 에러:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      msg: typeof err.response?.data?.msg === "string"
        ? err.response.data.msg
        : "결제 요청 실패",
      error: typeof err.response?.data === "object"
        ? err.response.data
        : { message: err.message || "Unknown error" }
    });
  }
});
router.get('/success', async (req, res) => {
  console.log("🧩 세션 상태:", {
  tid: req.session.tid,
  order_id: req.session.order_id,
  user_id: req.session.user_id
});
const pg_token = req.query.pg_token;
const order_id = req.session.order_id; // ✅ 세션에서 꺼내야 일치함
const user_id = req.session.user_id || "guest";

  console.log("✅ 승인된 order_id:", order_id);
  console.log("✅ 승인된 user_id:", user_id);

  try {
    const approval = await axios.post("https://kapi.kakao.com/v1/payment/approve",
      new URLSearchParams({
        cid: "TC0ONETIME",
        tid: req.session.tid,  // 결제 준비 단계에서 저장된 tid
        partner_order_id: req.session.order_id,       // ✅ OK
        partner_user_id: req.session.user_id || "guest",
        pg_token,
      }),
      {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_ADMIN_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const order_id = req.session.order_id;
    console.log("✅ order_id 확인:", order_id);
    // ✅ 여기에 DB 저장
    console.log("🟡 DB 저장 시도: ", order_id, user_id);
    await Order.create({
      order_id: req.session.order_id,
      tid: approval.data.tid,
      item_name: approval.data.item_name,
      amount: approval.data.amount.total,
      user_id: user_id || "guest",
      date: new Date()
    });
    console.log("✅ DB 저장 완료");

    res.send(`<script>alert("결제 완료!"); location.href="/";</script>`);
  } catch (err) {
    console.error("결제 승인 오류:", err.response?.data || err);
    res.status(400).send("결제 승인 실패");
  }
});
router.post('/refund', async (req, res) => {
  try {
router.get("/order-history", async (req, res) => {
  const user_id = req.session.user_id;
  const orders = await Order.find({ user_id }).sort({ date: -1 });
  res.json(orders);
});
    if (!order) {
      console.log("❌ 주문 내역 없음:", order_id);
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    console.log("✅ 환불할 주문:", order);

    // ✅ 카카오페이 환불 요청
    const refundResponse = await axios.post(
      "https://kapi.kakao.com/v1/payment/cancel",
      new URLSearchParams({
        cid: "TC0ONETIME",               // 테스트 CID
        tid: order.tid,                  // 결제 TID
        cancel_amount: order.amount,     // 전체 환불
        cancel_tax_free_amount: 0
      }),
      {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_ADMIN_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    console.log("✅ 환불 성공:", refundResponse.data);

    res.json({ success: true, message: "환불 완료!" });
  } catch (err) {
    console.error("❌ 환불 오류:", err.response?.data || err.message);
    res.status(500).json({ success: false, message: "환불 실패" });
  }
});
module.exports = router;
