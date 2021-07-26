const http = require("http");

const server = http.createServer((request,response) => {
    if (request.url === "/"){
        response.writeHead(200);
        response.write("Hola Mundo")
        response.end()
    }if(request.url === "/productos"){
        response.writeHead(200);
        response.write("Hola producto")
        response.end()
    }if(request.url === "/casa"){
        response.writeHead(200);
        response.write("Hola casita")
        response.end()
    }
})

server.listen(3000, ()=> console.log("Se inicio el servidor"))