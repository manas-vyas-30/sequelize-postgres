const db = require("../db.config");
const Customer = db.customers;

const findAllCustomers = () => Customer.findAll();

const findCustomerByEmail = (email) => Customer.findByPk(email);

const createCustomer = (name, email, age) =>
  Customer.create({ name, email, age });

const updateCustomer = (name, email, age) =>
  Customer.update({ name, email, age }, { where: { email } });

const deleteCustomer = (email) => Customer.destroy({ where: { email } });

module.exports = {
  findAllCustomers,
  findCustomerByEmail,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
