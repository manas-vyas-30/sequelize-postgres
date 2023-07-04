const {
  createCustomer,
  deleteCustomer,
  findAllCustomers,
  findCustomerByEmail,
  updateCustomer,
} = require("../services/customer.service");

const findCustomers = async (req, res) => {
  try {
    const data = await findAllCustomers();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const findCustomerUsingEmail = async (req, res) => {
  try {
    const data = await findCustomerByEmail(req.params.email);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addCustomer = async (req, res) => {
  try {
    const data = await createCustomer(
      req.body.name,
      req.body.email,
      req.body.age
    );
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const editCustomer = async (req, res) => {
  try {
    const data = await findCustomerByEmail(req.body.email);
    if (!data)
      return res.status(401).json({ success: false, msg: "User not found!" });
    await updateCustomer(
      req.body.name || data.name,
      req.body.email,
      req.body.age || data.age
    );
    res.status(200).json({
      success: true,
      msg: `Customer ${req.body.email} updated successfully!`,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const removeCustomer = async (req, res) => {
  try {
    const data = await findCustomerByEmail(req.params.email);
    if (!data)
      return res.status(401).json({ success: false, msg: "User not found!" });
    await deleteCustomer(req.params.email);
    res.status(200).json({
      success: true,
      msg: `Customer ${req.params.email} deleted successfully!`,
    });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  findCustomers,
  findCustomerUsingEmail,
  addCustomer,
  editCustomer,
  removeCustomer,
};
