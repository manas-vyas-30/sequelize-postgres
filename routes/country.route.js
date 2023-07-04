const { Router } = require("express");
const {
  addCountry,
  findCountries,
} = require("../controllers/country.controller");

const router = Router();

router.get("/", findCountries);
router.post("/add", addCountry);

module.exports = router;
