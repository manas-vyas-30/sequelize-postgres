module.exports = (sequelize, Sequelize) => {
  const countries = sequelize.define(
    "country",
    {
      countryName: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return countries;
};
