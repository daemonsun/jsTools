var http = require("http");

http
  .createServer(function (request, response) {
    // 发送HTTP头部
    response.writeHead(200, { "Content-Type": "text/plain" });
    // 发送相应数据
    response.end("I'm a message.");
  })
  .listen(8888);

console.log("Server is running at port: 8888...");
