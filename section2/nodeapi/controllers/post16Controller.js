var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

exports.getPosts = (req, res) => {
    res.json({
        posts: [ 
            { title: "First Post"}, 
            {title: "Second Post"}
        ]
    });``
};

