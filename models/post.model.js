module.exports = (sequelize, Sequelize) => {
  const messages = sequelize.define(
    "post",
    {
      message: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return messages;
};
