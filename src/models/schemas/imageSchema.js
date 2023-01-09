const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  alt: {
    type: String,
    require: true,
  },
  smallUrl: {
    type: String,
    require: true,
  },
  mediumUrl: {
    type: String,
    require: true,
    trim: true,
  },
  largeUrl: {
    type: String,
    require: true,
    trim: true,
  },
});

module.exports = imageSchema;
