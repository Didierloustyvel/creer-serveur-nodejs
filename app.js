  var PORT = process.env.PORT || 8080
  const express = require("express")
  const http = require("http");
  const app = express()
  const server = http.createServer(app);

  server.listen(PORT, () => console.log("Server started"))