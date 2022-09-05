var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '______________________________________' )

const fs = require('fs')
const fileName = 'synchronous.txt'

const data =  fs.readFileSync(fileName);
console.log(data.toString());

console.log( 'Should this message be printed after the ones above? Yes, Synchronous programming !!' )