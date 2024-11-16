const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const apiRouter = require("./api");

const app = express();

// Middleware for security
app.use(helmet());

// Middleware for compression
app.use(compression());

// Middleware for JSON parsing
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, "dist")));

// API router
app.use("/api", apiRouter);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Catch-all route to serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
