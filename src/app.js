import http from "http";
import fs from "fs";
import path from "path";

import append from "../utility/append.js";
import divide from "../utility/divide.js";
import multiply from "../utility/multiply.js";
import subtract from "../utility/subtract.js";

const functionList = "../utility/";
const files = fs.readdirSync(functionList);
console.log(functionList.length);
console.log(files);

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    const firstPage = fs.readFileSync("../public/index.html");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(firstPage);
    for (let i = 0; i < functionList.length; i++) {
      const functionName = functionList[i];
      fs.readFileSync(`../utility/${functionName}`);
      response.write(functionList[i]);
    }
    response.end();
  }
});

server.listen(2080, function (error) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log("server is running");

  // console.log(append(10, 20));
  // console.log(subtract(50, 25));
  // console.log(multiply(10, 5));
  // console.log(divide(100, 5));
});
