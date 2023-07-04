const db = require("../db.config");
const Country = db.countries;

const findAllCountries = () => Country.findAll();

const createCountry = (countryName) => Country.create({ countryName });

module.exports = {
  findAllCountries,
  createCountry,
};
