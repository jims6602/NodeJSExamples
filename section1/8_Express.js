var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '______________________________________' )

console.log( 'URL: localhost:3002' )
console.log( 'Please press "ctrl + c" to continous' )


const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World from express')
})
 
app.listen(3002)
