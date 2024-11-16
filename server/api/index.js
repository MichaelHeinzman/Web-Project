const express = require("express");
const helloRouter = require("./hello");
const usersRouter = require("./users");

const router = express.Router();

// Mount routers
router.use("/hello", helloRouter);
router.use("/users", usersRouter);

module.exports = router;
