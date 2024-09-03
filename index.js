const net = require('net');
const url = require('url');

const PORT = 3000;

// Create a TCP server
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const request = data.toString();
    const requestLine = request.split('\r\n')[0];
    const [method, path] = requestLine.split(' ');

    // Parse URL and handle routes
    const parsedUrl = url.parse(path, true);
    const route = parsedUrl.pathname;

    let responseBody = '';
    let statusCode = 200;
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    if (method === 'GET') {
      if (route === '/time') {
        // Handle /time route
        responseBody = JSON.stringify({ time: new Date().toISOString() });
      } else if (route === '/data') {
        // Handle /data route with 1 second delay
        setTimeout(() => {
          responseBody = JSON.stringify({ data: [1,2,3] });
          socket.write(`HTTP/1.1 ${statusCode} OK\r\n`);
          Object.entries(headers).forEach(([key, value]) => {
            socket.write(`${key}: ${value}\r\n`);
          });
          socket.write('\r\n');
          socket.write(responseBody);
          socket.end();
        }, 1000);
        return;
      } else {
        // Handle unknown routes
        statusCode = 404;
        responseBody = JSON.stringify({ error: 'Not Found' });
      }

      // Send response
      socket.write(`HTTP/1.1 ${statusCode} OK\r\n`);
      Object.entries(headers).forEach(([key, value]) => {
        socket.write(`${key}: ${value}\r\n`);
      });
      socket.write('\r\n');
      socket.write(responseBody);
      socket.end();
    }
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});