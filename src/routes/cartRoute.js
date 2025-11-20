const express = require("express");
const router = express.Router();
const { addToCart, getCart, removeFromCart } = require("../controllers/cartController");
const { protect } = require("../middlewares/auth");


router.use(protect);

router.post("/add", addToCart);
router.get("/", getCart);
router.delete("/remove", removeFromCart);


module.exports = router;