var path = require('path');
var scriptName = path.basename(__filename);
console.log( '#### ' + scriptName  )

function sum(a,b){
    return a +b;
}
function add(a,b){
    return a +b;
}

module.exports = {
    sum,
    add
}
