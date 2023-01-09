"use strict";

var express = require("express");
var _require = require("../controllers/Products"),
  getAllProducts = _require.getAllProducts,
  createProduct = _require.createProduct,
  getProduct = _require.getProduct;
var router = express.Router();
router.get("/api/products", getAllProducts);
router.post("/api/products/new", createProduct);
router.get("/api/producs/:id", getProduct);
module.exports = router;