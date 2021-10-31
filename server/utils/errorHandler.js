const { Handle404 } = require("../utils/errors");

const handleError = (err, res) => {
  const { msg, httpStatus, details } = err;
  res.status(httpStatus ? httpStatus : 500).send({
    httpStatus,
    msg,
    details,
  });
};

// Invalid route
const handle404 = (req, res, next) => {
  try {
    throw new Handle404({
      details: {
        message: `Path ${req.path} not found`,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  handleError,
  handle404,
};
