require("dotenv").config();
const { program } = require("commander");
const prompt = require("prompt");
const debug = require("debug")("index.js");
const chalk = require("chalk");

const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("El server funciona");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  debug(`Server is running on http://${host}:${port}`);
});
