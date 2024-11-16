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

// API routes - must be mounted before static file serving
app.use("/api", apiRouter);

// Serve static files
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Export app for Vercel
module.exports = app;
