import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
