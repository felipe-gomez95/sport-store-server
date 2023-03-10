require("dotenv").config();
const express = require("express");
const dbConection = require("./conectDB");
const router = require("./routes/index.routes");
const path = require("path");
const cors = require("cors");

dbConection();
const app = express();
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(express.static(path.join(__dirname, "/public")));

app.listen(process.env.PORT || 3000, () => {
  console.log("Server on port: ", process.env.PORT || 3000);
});
