const db = require("../db.config");
const Buyer = db.buyers;

const findAllBuyers = () => Buyer.findAll();

const createBuyer = (buyerName) => Buyer.create({ buyerName });

module.exports = {
  findAllBuyers,
  createBuyer,
};
