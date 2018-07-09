var http = require('http');

var server = http.createServer(function (request, response) {

    console.log(request.method + ': ' + request.url)

    response.writeHead(200, {'Content-type': 'text/html'})

    response.end('<p>Hello World</p>')
})

server.listen(8098)

console.log('Server is running at http://127.0.0.1:8098/');