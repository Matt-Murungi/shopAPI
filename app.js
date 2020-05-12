const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/order");

mongoose.connect(
  "mongodb+srv://restshop:" +
  process.env.MONGO_PASSWORD +"@restshop-963aj.gcp.mongodb.net/test?retryWrites=true&w=majority", {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(()=> console.log("Working"));

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    req.header("Access-Control-Allow-Methods", "*");
    res.send(200).json({});
  }
  next();
});





app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
