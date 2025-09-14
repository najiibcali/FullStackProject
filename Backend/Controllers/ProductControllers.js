const ProductModel = require("../Model/ProductModel");

// Create product
const createProduct = async (req, res) => {
  try {
    const newData = new ProductModel({
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      category: req.body.category,
      prImage: req.file ? req.file.filename : undefined,
    });

    const saveData = await newData.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read all products
const readProduct = async (req, res) => {
  try {
    const getData = await ProductModel.find();
    res.json(getData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const putData = await ProductModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          quantity: req.body.quantity,
          price: req.body.price,
          category: req.body.category,
          prImage: req.file ? req.file.filename : undefined,
        },
      }
    );

    res.json({ message: "Product updated successfully", data: putData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read single product
const readProductsingle = async (req, res) => {
  try {
    const getSingle = await ProductModel.findById(req.params.id);
    if (!getSingle) return res.status(404).json({ error: "Product not found" });
    res.json(getSingle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const removeProduct = await ProductModel.deleteOne({ _id: req.params.id });
    res.json({ message: "Product deleted successfully", data: removeProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProduct, readProduct, updateProduct, readProductsingle, deleteProduct };
