module.exports = (sequelize, Sequelize) => {
  const capitals = sequelize.define(
    "capital",
    {
      capitalName: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return capitals;
};
