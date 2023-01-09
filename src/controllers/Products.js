const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne(id);
    res.json(product);
  } catch (error) {}
};

const createProduct = async (req, res) => {
  try {
    const newProduct = Product(req.body);
    const productSaved = await newProduct.save();
    res.status(200).send({ message: "done", productSaved });
  } catch (error) {}
};

module.exports = { getAllProducts, createProduct, getProduct };
