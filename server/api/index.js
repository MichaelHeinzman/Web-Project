// Mount routers
const express = require("express");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

// Middleware for security
app.use(helmet());

// Middleware for compression
app.use(compression());

// Middleware for JSON parsing
app.use(express.json());

// API routes - must be mounted before static file serving
const router = express.Router();
const usersRouter = require("./users");
router.use("/api/users", usersRouter);
app.use(router);

// Serve static files
app.use(express.static(path.resolve(__dirname, "../../client/dist")));

// Catch-all route for React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"));
});

app.listen(3000, () => console.log("Server ready on port 3000."));

// Export app for Vercel
module.exports = app;
