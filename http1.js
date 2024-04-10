const http = require('node:http');

const server = http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    
    request
        .on('error', err => {
            console.error('Request error:', err);
            response.statusCode = 400;
            response.end();
        })
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            console.log('Request body:', body);
            
            // Set response headers and status
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            
            // Send response
            response.end('Received request successfully');
        })
        .emit('end')
});

server.on('error', err => {
    console.error('Server error:', err);
});

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
