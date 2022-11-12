const http = require('http');
const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.write('Hello world!')
        res.end();
    }
    if (req.url === '/courses/aslah') {
        res.write(JSON.stringify([1,2,3,45]))
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('someone connected ' + socket);
// })

server.listen(2000);
console.log('Listening to port 2000....')