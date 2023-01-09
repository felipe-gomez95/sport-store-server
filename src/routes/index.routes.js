const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProduct,
} = require("../controllers/Products");

const router = express.Router();

router.get("/api/products", getAllProducts);
router.post("/api/products/new", createProduct);
router.get("/api/producs/:id", getProduct);

module.exports = router;
