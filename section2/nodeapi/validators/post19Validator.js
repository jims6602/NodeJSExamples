var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );


exports.createPost = (req, res, next) => {

     // Title
    req.check( "title", "Write a title").noEmpty();
    req.check("title", "Title must be between 4 to 150 characters").isLength({
        min:4,
        max:150
    });

    // Body
    req.check( "body", "Write a body").noEmpty();
    req.check("tbody", "Body must be between 4 to 150 characters").isLength({
        min:4,
        max:2000
    });

    // Check for errors
    const errors = req.validationErrors();

    // If error show the one as they happen.
    if(errors) {
        const firstError = errors.map(erro => error.msg)[0];
        return res.status(400).json( {error: firstError} );
    }

    // Proceed to next middleware
    next();

};






