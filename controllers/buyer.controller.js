const { createBuyer, findAllBuyers } = require("../services/buyer.service");

const findBuyers = async (req, res) => {
  try {
    const data = await findAllBuyers();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addBuyer = async (req, res) => {
  try {
    const data = await createBuyer(req.body.buyerName);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  findBuyers,
  addBuyer,
};
