const Product = require("../Models/ProductModels");

// TEST router---->  http://localhost:8000/api/v1/products
exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "message from GetProduct controller",
  });
};

// create data---->  http://localhost:8000/api/v1//product/new
exports.newProduct = async (req, res, next) => {

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
  
};
