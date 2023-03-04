"use strict";

const append = function () {
  let html = `
  
  `;
  document.querySelector("body").append(html);
};

const { createArtisticFont } = require("./fontFile.js");

const http = require("http");

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/plain");
  // res.write(`${createArtisticFont("Frontend Bootcamp")}`);
  res.end(
    createArtisticFont(
      "Frontend Bootcamp",
      "3D-ASCII",
      undefined,
      undefined,
      100
    )
  );
});

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
