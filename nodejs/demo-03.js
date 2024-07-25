const http = require('http');

const server = http.createServer((req,resp)=>{
    resp.statusCode = 200;
    resp.setHeader("Content-Type","text/plain");
    resp.end("Hello India");
});

server.listen(5000, "127.0.0.1", ()=>{
    console.log("HTTP Server on port 5000");
    console.log("Test URL http://localhost:5000");
})