const express = require("express");
const cors = require("cors");

const { handleError, handle404 } = require("./utils/errorHandler");
// Connecting to database
require("./db/mongoose");
const app = express();
// Enabling CORS globally
app.use(cors());
// Routes
const userRoutes = require("./modules/user/userRoutes");
const tweetRoutes = require("./modules/tweet/tweetRoutes");
//Configuring express to automatically parse JSON (i.e,converts JSON to object--provided by user through browser(as browser converts data to JSON))
app.use(express.json());

app.use(userRoutes);
app.use(tweetRoutes);

// Catch 404 - Route path did not found
app.use((req, res, next) => {
  handle404(req, res, next);
});

// Error handling middleware must be at the last among other middleware and routes for it to function correctly.
app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;
