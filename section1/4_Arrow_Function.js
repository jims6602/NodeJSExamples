var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '___________________________________' )

const helpers = require("./helpers_arrow_function");

const total = helpers.sum(10,200)

console.log("TOTAL:", total );

