const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {  // lowercase
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  prImage: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["available", "out of Stock"], // correct spelling
    default: "available"
  },
  category: {
    type: String,
    required: true
  },
}, { timestamps: true });

// Middleware before save
ProductSchema.pre("save", function(next) {
  this.status = this.quantity > 0 ? "available" : "out of Stock";
  next();
});

// Middleware before updateOne
ProductSchema.pre("updateOne", function(next) {
  const update = this.getUpdate();
  const quantity = update.$set?.quantity;
  if (quantity !== undefined) {
    update.$set.status = quantity > 0 ? "available" : "out of Stock";
    this.setUpdate(update);
  }
  next();
});

module.exports = mongoose.model("Product", ProductSchema); // singular for populate
