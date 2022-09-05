var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '______________________________________' )

console.log( 'Type some characters in the 9_Event_Loop.txt file.' )

const fs = require('fs')
const fileName = "event_loop.txt";

fs.watch(fileName, () => console.log('File changed!'));