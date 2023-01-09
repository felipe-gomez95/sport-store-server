"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var Product = require("../models/Product");
var getAllProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Product.find({});
        case 3:
          products = _context.sent;
          res.json(products);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return Product.findOne(id);
        case 4:
          product = _context2.sent;
          res.json(product);
          _context2.next = 10;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var createProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var newProduct, productSaved;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newProduct = Product(req.body);
          _context3.next = 4;
          return newProduct.save();
        case 4:
          productSaved = _context3.sent;
          res.status(200).send({
            message: "done",
            productSaved: productSaved
          });
          _context3.next = 10;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function createProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
module.exports = {
  getAllProducts: getAllProducts,
  createProduct: createProduct,
  getProduct: getProduct
};