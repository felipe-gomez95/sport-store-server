const mongoose = require("mongoose");

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("MongoDB conected...");
  } catch (error) {
    console.error(error);
  }
};

module.exports = conectDB;
