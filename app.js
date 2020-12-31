const http = require('http');
const os = require('os');
const log4js = require('log4js');
const logger = log4js.getLogger();

logger.level = 'info';

logger.info("App starting...");

log4js.configure({
    appenders: {
      app: { type: 'file', filename: 'app.log' }
    },
    categories: {
      default: { appenders: [ 'app' ], level: 'info' }
    }
  });

var handler = function(request, response) {
  logger.info("Received request from IP" + request.connection.remoteAddress + " with hostname of " + request.connection.hostname);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);