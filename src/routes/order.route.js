const express = require("express");
const { placeOrder, getMyOrders, getOrderById } = require("../controllers/orderController");
const { protect } =require("../middlewares/auth");

const router = express.Router();

router.use(protect);

router.post("/place", placeOrder);
router.get("/my-orders", getMyOrders);
router.get("/:id", getOrderById);

module.exports = router;