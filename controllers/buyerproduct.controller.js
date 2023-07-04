const {
  createBuyerProduct,
  findAllBuyerProducts,
} = require("../services/buyerproduct.service");

const findBuyerProducts = async (req, res) => {
  try {
    const data = await findAllBuyerProducts();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addBuyerProduct = async (req, res) => {
  try {
    const data = await createBuyerProduct(req.body.buyerId, req.body.productId);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  findBuyerProducts,
  addBuyerProduct,
};
