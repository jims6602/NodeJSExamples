var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '______________________________________' )

console.log( 'URL: localhost:3001' )
console.log( 'Please press "ctrl + c" to continous' )

const http = require("http");

const server = http.createServer(( req, res) => {

    res.end("Hello world from NodeJS");

});

server.listen(3000);