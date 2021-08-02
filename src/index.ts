import http from 'https';

http.createServer((req, res) => {
    res.end('Hi!');
}).listen(9088);
