var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '______________________________________' )

const fs = require('fs')
const fileName = 'asynchronous.txt'

fs.readFile(fileName, (err, data) => {

    if(err){
        console.log(err)
    }
    
    console.log(data.toString());

});

console.log( 'Should this message be printed after the ones above? No, Asynchronous programming !!' )