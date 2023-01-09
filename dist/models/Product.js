"use strict";

var mongoose = require("mongoose");
var imageSchema = require("./schemas/imageSchema");
var productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  price: {
    type: Number,
    require: true,
    trim: true
  },
  description: {
    type: String,
    require: true,
    trim: true
  },
  quantity: {
    type: Number,
    require: true,
    trim: true
  },
  status: {
    type: Boolean,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
});
module.exports = mongoose.model("products", productSchema);