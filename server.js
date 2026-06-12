const http = require('http');
const PORT= 3000;

const server = http.createServer((req,res)=>{
    if(req.url === '/getSecretData'){
        res.end("there is no secret data!!");
    }
    res.end("Namaste India!!");
});

server.listen(PORT);