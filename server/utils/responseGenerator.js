exports.getResponse = function (statusCode, msg, isShown, result) {
  return generateResponse(statusCode, msg, isShown, result);
};

// Response Structure --- Returning content / data in the form of array
function generateResponse(statusCode, msg, isShown, result = []) {
  const response = {
    statusCode,
    msg,
    isShown,
    result: Array.isArray(result) ? result : [result],
  };
  return response;
}
