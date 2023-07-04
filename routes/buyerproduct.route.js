const { Router } = require("express");
const {
  addBuyerProduct,
  findBuyerProducts,
} = require("../controllers/buyerproduct.controller");

const router = Router();

router.get("/", findBuyerProducts);
router.post("/add", addBuyerProduct);

module.exports = router;
