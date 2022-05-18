const { Router } = require("express");
const router = Router();

const { createUser, loginUser } = require("../controller/userController");

router.post("/register", createUser).post("/login", loginUser);

module.exports = router;
