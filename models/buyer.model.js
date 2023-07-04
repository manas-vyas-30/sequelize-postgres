module.exports = (sequelize, Sequelize) => {
  const buyers = sequelize.define(
    "buyer",
    {
      buyerName: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return buyers;
};
