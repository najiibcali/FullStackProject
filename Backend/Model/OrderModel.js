// models/OrderModel.js
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  Customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
