const errorMessages = require("./errorMessages");
const { HttpStatus } = require("./constants");

class ExtendableError extends Error {  
  constructor({ msg, httpStatus, details }) {
    super();
    (this.msg = msg), (this.httpStatus = httpStatus), (this.details = details);
  }
}

class Handle404 extends ExtendableError {
  constructor({
    msg = errorMessage.invalidRoute,
    httpStatus = HttpStatus.NotFound404,
    details,
  }) {
    super({ msg, httpStatus, details });
  }
}

class QueryExecutionError extends ExtendableError {
  constructor({
    msg = errorMessages.dbError,
    httpStatus = HttpStatus.dbError,
    details,
  }) {
    super({ msg, httpStatus, details });
  }
}

module.exports = {
  QueryExecutionError,
  Handle404,
  ExtendableError
};