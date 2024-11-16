const express = require("express");
const { getUsers, createUser } = require("./controller");

const router = express.Router();

// Define routes
router.get("/", getUsers); // GET /api/users
router.post("/", createUser); // POST /api/users

module.exports = router;
