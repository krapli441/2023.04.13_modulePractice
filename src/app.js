import http from "http";
import fs from "fs";

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    const firstPage = fs.readFileSync("../public/index.html");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(firstPage);
  }
});

server.listen(2080, function (error) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log("server is running");
});
