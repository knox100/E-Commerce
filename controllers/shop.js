const Product = require("../models/product");

// Product list page
module.exports.getProduct = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      title: "All Products",
      path: "/products",
    });
  });
};

// product id
module.exports.getId = (req, res) => {
  const id = req.params.id;
  Product.findById(id, (product) => {
    res.render("shop/product-details", {
      product: product,
      title: product.title,
      path: "/products",
    });
  });
};

// index page view
module.exports.getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      title: "Home",
      path: "/",
    });
  });
};

// cart Controller
module.exports.getCart = (req, res) => {
  res.render("shop/cart", {
    title: "Your Cart",
    path: "/cart",
  });
};

// post to cart controller
module.exports.postCart = (req, res) => {
  const id = req.body.productId;
  console.log(id);
  res.redirect("/cart");
};

// order controllers
module.exports.getOrders = (req, res) => {
  res.render("shop/orders", {
    title: "Your orders",
    path: "/orders",
  });
};

// Checkout Controller
module.exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    title: "Your Cart",
    path: "/checkout",
  });
};
