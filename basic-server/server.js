const HTTP = require("http");
const PORT = 8080;

HTTP.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello world!");
}).listen(PORT, () => {
  console.log("Server listening on Port: " + PORT);
});
