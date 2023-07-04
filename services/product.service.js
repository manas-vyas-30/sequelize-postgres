const db = require("../db.config");
const Product = db.products;

const findAllProducts = () => Product.findAll();

const createProduct = (productName) => Product.create({ productName });

module.exports = {
  findAllProducts,
  createProduct,
};
