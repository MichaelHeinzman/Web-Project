const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

// Middleware for security
app.use(helmet());

// Middleware for compression
app.use(compression());

// Middleware for JSON parsing
app.use(express.json());

// API routes
const router = express.Router();
const usersRouter = require("./users");
router.use("/api/users", usersRouter);
app.use(router);

// Remove static file serving and catch-all route
// These are not needed when deploying to Vercel

// Start the server (only if running locally)
if (require.main === module) {
  app.listen(5000, () => console.log("Server ready on port 5000."));
}

// Export app for Vercel
module.exports = app;
