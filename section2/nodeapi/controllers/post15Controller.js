var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

exports.getPosts = (req, res) => {
    res.send("Hello world from NodeJS");
};

