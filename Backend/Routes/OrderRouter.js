const express = require("express");
const router = express.Router();

// Hubi inaad si sax ah u import garaysay
const { createOrder, getOrders } = require("../Controllers/OrderController");

// POST create order
router.post("/create/order", createOrder);  // <--- handler waa function

// GET all orders
router.get("/orders", getOrders);  // <--- handler waa function

module.exports = router;
