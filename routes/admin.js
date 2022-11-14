const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router
  // add products route
  .get("/add-products", adminController.getAddProduct)

  // displaying the available products route
  .get("/products", adminController.getProduct)

// adding products to the store
  .post("/add-products", adminController.postAddProduct);

module.exports = router;
