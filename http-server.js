const http = require('http');

const PORT = 8000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, World!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});