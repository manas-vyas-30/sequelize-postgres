const { Router } = require("express");
const {
  addCapital,
  findCapitals,
} = require("../controllers/capital.controller");

const router = Router();

router.get("/", findCapitals);
router.post("/add", addCapital);

module.exports = router;
