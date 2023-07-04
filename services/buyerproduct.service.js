const db = require("../db.config");
const BuyerProduct = db.buyerproducts;

const findAllBuyerProducts = () => BuyerProduct.findAll();

const createBuyerProduct = (buyerId, productId) =>
  BuyerProduct.create({ buyerId, productId });

module.exports = {
  findAllBuyerProducts,
  createBuyerProduct,
};
