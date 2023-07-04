const { Router } = require("express");
const {
  addCustomer,
  editCustomer,
  findCustomers,
  findCustomerUsingEmail,
  removeCustomer,
} = require("../controllers/customer.controller");

const router = Router();

router.get("/", findCustomers);
router.get("/:email", findCustomerUsingEmail);
router.post("/add", addCustomer);
router.put("/update", editCustomer);
router.delete("/delete/:email", removeCustomer);

module.exports = router;
