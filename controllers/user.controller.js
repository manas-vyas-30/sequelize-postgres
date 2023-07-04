const { createUser, findAllUsers } = require("../services/user.service");

const findUsers = async (req, res) => {
  try {
    const data = await findAllUsers();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const data = await createUser(req.body.username, req.body.password);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  findUsers,
  addUser,
};
