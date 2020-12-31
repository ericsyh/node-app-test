const http = require('http');
const os = require('os');
const log4js = require('log4js');
const logger = log4js.getLogger();

logger.level = 'info'

logger.info("App starting...");

var handler = function(request, response) {
  logger.info("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);