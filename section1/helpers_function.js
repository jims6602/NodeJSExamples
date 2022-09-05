var path = require('path');
var scriptName = path.basename(__filename);
console.log( '#### ' + scriptName  )

function sum(a,b){
    return a +b;
}

console.log("MODULE.EXPORT ( before - export object does NOT contain sum function ): ", module.exports);

module.exports = {
    sum
}

console.log("MODULE.EXPORT ( after - export object does contain sum function ): ", module.exports);