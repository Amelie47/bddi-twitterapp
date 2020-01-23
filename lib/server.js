const http = require("http");
const fs = require("fs");
const {pipeline} = require("stream");
const ws = require("ws");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    const fileStream = fs.createReadStream("./public/index.html");

    pipeline(
      fileStream,
      response,
      error => {
        if (error) {
          console.error(error);
          response.writeHead(500);
          response.end("an error occured");
        }

        console.log("end of response");
      }
    )
  }
});

const wsServer = new ws.Server({
  server
})

module.exports = {
  server,
  wsServer
};
