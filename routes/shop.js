const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");

router
  // Home page
  .get("/", shopController.getIndex)

  // products route
  .get("/products", shopController.getProduct)

  // product details
  .get("/products/:id", shopController.getId)

  //cart route
  .get("/cart", shopController.getCart)
  .post("/cart", shopController.postCart)

  // order route
  .get("/orders", shopController.getOrders)

  // checkout route
  .get("/checkout", shopController.getCheckout);

module.exports = router;
