import http from 'http';

http.createServer((_, res) => {
    res.end('Hi!');
}).listen(9088);
