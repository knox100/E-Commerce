require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require("./controllers/error");

// express app
const app = express();

// view engine
app.set("view engine", "ejs");

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app
  //product route
  .use("/admin", adminRoute)

  // Shop route
  .use(shopRoute)

  // 404 error message
  .use(errorController.get404);

// server is running
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port 3222`);
});
