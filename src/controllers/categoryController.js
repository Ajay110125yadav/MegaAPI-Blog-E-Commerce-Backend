const Category = require("../models/categorymodel");

// Create category.

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const exist = await Category.findOne({ name });
    if (exist) {
      return res.status(200).json({ message: "Category already exists" });

    }

    const category = await Category.create({ name });

    res.status(201).json({
      message: "Category created",
      category,
    });
  } catch (error){
    res.status(500).json({ message: "Error creating category", error });
  }
};

// Get all categories.
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ messsage: "Error fetching categories", error });
  }
};