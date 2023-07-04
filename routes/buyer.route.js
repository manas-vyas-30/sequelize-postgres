const { Router } = require("express");
const { addBuyer, findBuyers } = require("../controllers/buyer.controller");

const router = Router();

router.get("/", findBuyers);
router.post("/add", addBuyer);

module.exports = router;
