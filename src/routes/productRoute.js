const express = require("express");
const upload = require("../middlewares/upload");
const { createProduct, getAllProducts, getProductById } = require("../controllers/productController");

const router = express.Router();


router.post("/", upload.single("image"), createProduct);
router.get("/:id", getProductById);
router.get("/", getAllProducts);

module.exports = router;