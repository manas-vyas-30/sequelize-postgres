const {
  createCountry,
  findAllCountries,
} = require("../services/country.service");

const findCountries = async (req, res) => {
  try {
    const data = await findAllCountries();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addCountry = async (req, res) => {
  try {
    const data = await createCountry(req.body.countryName);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  findCountries,
  addCountry,
};
