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

// API routes - must come before static file serving
app.use("/api", apiRouter);

// Serve static files for React
if (process.env.NODE_ENV !== "production") {
  console.log("Serving static files for local development...");
  app.use(express.static(path.join(__dirname, "../client/dist")));

  // Catch-all route to serve React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
} else {
  // Production static file serving (ensure you deploy client/dist)
  app.use(express.static(path.join(__dirname, "dist")));

  // Catch-all route to serve React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the server
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
