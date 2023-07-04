const db = require("../db.config");
const Capital = db.capitals;

const findAllCapitals = () => Capital.findAll();

const createCapital = (capitalName, countryId) =>
  Capital.create({ capitalName, countryId });

module.exports = {
  findAllCapitals,
  createCapital,
};
