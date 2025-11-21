const Cart = require("../models/cartmodel");
const Order = require("../models/ordermodel");

exports.placeOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { address } = req.body;


    const cart = await Cart.findOne({ user: userId }).populate("products.product");

    if (!cart || cart.products.lenght === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }


    let totalAmount = 0;

    cart.products.forEach((item) => {
      totalAmount += item.product.price * item.quantity;
    });


    const order = await Order.create({
      user: userId,
      products: cart.products,
      amount: totalAmount,
      address,
      status: "Pending",
      paymentStatus: "Pending",
    });

    // empty cart after order
    cart.products = [];
    await cart.save();

    res.status(201).json({ message: "Order placed", order});
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error});
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
    .populate("products.product");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    .populate("products.product");

    if (!order) {
      return res.status(404).json({ message: "Order mpt found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error });
  }
};