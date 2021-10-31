const http = require("http");
const app = require("../app");
const PORT = normalizePort(process.env.PORT);

// HTTP Server
const server = http.createServer(app);

// Port normalization
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

server.listen(PORT, async () => {
  console.log(`App is up and Running on port ${PORT}`);
});
