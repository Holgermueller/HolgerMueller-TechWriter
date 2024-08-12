const HTTP = require("http");
const fs = require("fs");
const PORT = 8080;

HTTP.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}).listen(PORT, () => {
  console.log("Server listening on Port: " + PORT);
});
