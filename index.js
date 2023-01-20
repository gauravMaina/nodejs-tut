const http = require('http');


http.createServer((req,resp) =>
{
resp.write("<h1>http server running</h1>");
resp.end();
}).listen(4500);