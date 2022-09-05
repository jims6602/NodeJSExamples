var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' )

const express = require("express");
const morgan = require("morgan");

const app14 = express();

// Bring in routes
const { getPosts14 } = require("./routes/port14")

// Middleware
const myOwnMiddleware = ( req, res, next) => {
    console.log("Middleware applied.")
};

// app14.use(morgan("dev14"))
app14.use(myOwnMiddleware);

app14.get("/", getPosts14 );

const port = 8014;

app14.listen(port, () =>{
    console.log("NodeJS is listening on: " + port );
});