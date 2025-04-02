const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Test Server</h1><p>This is a test server running on port 3000</p></body></html>');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Test server running on port 3000');
});