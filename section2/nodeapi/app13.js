var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' )

const express = require("express");

const app13 = express();

// Bring in routes
const postRoutes = require("./routes/port13")

app13.get("/", postRoutes.getPosts13);

const port = 8013;

app13.listen(port, () =>{
    console.log("NodeJS is listening on: " + port );
});