const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
        products: [
          {
            product: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Product",
            },
            quantity: Number,
          },
        ],
        amount: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          enum: ["Pending", "shipped", "Delivered", "Cancelled"],
          default: "Pending",
        },
        paymentStatus: {
          type: String,
          enum: ["Pending", "Paid", "Failed"],
          default: "Pending",
        }
      },
      { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);