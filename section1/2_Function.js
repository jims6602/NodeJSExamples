var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_________________________________________' )

function sum(a,b){
    return a +b;
}

const total = sum(10,200)

console.log("TOTAL:", total );