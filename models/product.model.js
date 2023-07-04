module.exports = (sequelize, Sequelize) => {
  const products = sequelize.define(
    "product",
    {
      productName: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return products;
};
