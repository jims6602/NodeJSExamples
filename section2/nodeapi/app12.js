var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' )

const express = require("express");

const app12 = express();

app12.get("/", (req, res) => {
    res.send("Hello word from NodeJS");
});

const port = 8012;

app12.listen(port, () =>{
    console.log("NodeJS is listening on: " + port );
});