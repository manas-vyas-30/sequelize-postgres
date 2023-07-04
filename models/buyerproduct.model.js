module.exports = (sequelize, Sequelize) => {
  const buyerproducts = sequelize.define(
    "buyerproduct",
    {
      buyerproductId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return buyerproducts;
};
