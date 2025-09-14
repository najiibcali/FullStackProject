const Order = require("../Model/OrderModel");
const Product = require("../Model/ProductModel");
const Customer = require("../Model/CustomerModel");

exports.createOrder = async (req, res) => {
  try {
    const { Customer: customerId, products } = req.body;
    let totalPrice = 0;

    for (let item of products) {
      const product = await Product.findById(item.productId);
      if (!product) return res.status(404).json({ error: "Product not found" });
      totalPrice += product.price * item.quantity;
    }

    const order = new Order({ Customer: customerId, products, totalPrice });
    await order.save();
    res.json({ message: "Order created successfully", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("Customer", "name email")
      .populate("products.productId", "name price category");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
