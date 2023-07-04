const db = require("../db.config");
const User = db.users;

const findAllUsers = () => User.findAll();

const createUser = (username, password) => User.create({ username, password });

module.exports = {
  findAllUsers,
  createUser,
};
