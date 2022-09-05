var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const dotenv = require('dotenv');

// Getting the environment variables for .env file
dotenv.config();

// Connecting to the database
console.log("MongoDB connection URL: " + process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true})
.then( ( )=> console.log('Successful! connected to MongDB.') );

mongoose.connection.on( 'error', err =>{
    console.log("Unsuccessful! connected to MongDB: " + err.message );
});

// Bring in routes
const postRoutes = require("./routes/port17Route");

// Middleware
app.use( morgan("dev"))


app.use("/", postRoutes );

const port = process.env.PORT_17 || 8017;

app.listen(port, () =>{
    console.log("NodeJS is listening on: " + port );
});