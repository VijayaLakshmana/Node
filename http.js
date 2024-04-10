const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our page');
    } else if (req.url === '/signup') {
        res.end('Give your details');
    } else {
        res.end('<h3>Oops</h3>');
    }
});

server.listen(2000);
