const {
  createCapital,
  findAllCapitals,
} = require("../services/capital.service");

const findCapitals = async (req, res) => {
  try {
    const data = await findAllCapitals();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addCapital = async (req, res) => {
  try {
    const data = await createCapital(
      req.body.capitalName,
      req.body.countryId || null
    );
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  findCapitals,
  addCapital,
};
