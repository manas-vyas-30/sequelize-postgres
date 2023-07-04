const {
  createProduct,
  findAllProducts,
} = require("../services/product.service");

const findProducts = async (req, res) => {
  try {
    const data = await findAllProducts();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const data = await createProduct(req.body.productName);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  findProducts,
  addProduct,
};
