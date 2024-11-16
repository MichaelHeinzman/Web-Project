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

app.get("/api/hello", (req, res) => {
  res.send("Hello from Vercel!");
});

// Serve static files for React
console.log("Serving static files for local development...");
app.use(express.static(path.join(__dirname, "../client/dist")));

// Catch-all route to serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
