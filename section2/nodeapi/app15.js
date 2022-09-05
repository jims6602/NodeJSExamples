var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

const express = require("express");
const app = express();
const morgan = require("morgan");


// Bring in routes
const postRoutes = require("./routes/port15Route");

// Middleware
app.use( morgan("dev"))


app.use("/", postRoutes );

const port = 8016;

app.listen(port, () =>{
    console.log("NodeJS is listening on: " + port );
});