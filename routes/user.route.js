const { Router } = require("express");
const { addUser, findUsers } = require("../controllers/user.controller");

const router = Router();

router.get("/", findUsers);
router.post("/add", addUser);

module.exports = router;
