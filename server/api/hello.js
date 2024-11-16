const express = require("express");
const router = express.Router();

// Simple route
router.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

module.exports = router;
