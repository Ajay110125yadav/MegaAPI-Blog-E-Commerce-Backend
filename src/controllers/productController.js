const Product = require("../models/productmodel");

exports.createProduct = async (req, res) => {
    try {
      const { name, description, price, category, stock } = req.body;


      const product = await Product.create({
        name,
        description,
        price,
        category,
        stock,
        image: req.file ? req.file.path : null,
      });

      res.status(201).json({
        message: "Product created",
        product,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
};

// GET ALL PRODUCTS

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");

    res.status(200).json({
      message: "All products",
      products,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching all products", error });
  }
};

// GET PRODUCT ID.

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product details",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products by id", error });
  }
};