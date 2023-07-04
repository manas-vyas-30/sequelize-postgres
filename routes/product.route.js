const { Router } = require("express");
const {
  addProduct,
  findProducts,
} = require("../controllers/product.controller");

const router = Router();

router.get("/", findProducts);
router.post("/add", addProduct);

module.exports = router;
