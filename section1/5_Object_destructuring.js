var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________' )

const {sum, add} = require("./helpers_object_destructuring");

const total_sum = sum(10,200)

console.log("TOTAL:(sum)", total_sum  );

const total_add = add(10,200)

console.log("TOTAL:(add)", total_add  );