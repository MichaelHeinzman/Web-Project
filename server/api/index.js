const express = require("express");
const usersRouter = require("./users");

const router = express.Router({ mergeParams: true });

// Mount routers
router.use("/users", usersRouter);

module.exports = router;
