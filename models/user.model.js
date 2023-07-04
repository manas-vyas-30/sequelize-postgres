module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define(
    "user",
    {
      username: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return users;
};
