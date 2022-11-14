const Product = require("../models/product");

// Get add product page
module.exports.getAddProduct = (req, res) => {
  res.render("admin/add-products", {
    title: "Add-Products",
    path: "/admin/add-products",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

//Post add product page
module.exports.postAddProduct = (req, res) => {
  //product class and saving it into the product array
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

// Retriving the products
module.exports.getProduct = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      title: "Admin Products",
      path: "/admin/products",
    });
  });
};
