var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

const express = require("express");
const postController = require('../controllers/post16Controller');

const router = express.Router();

router.get('/', postController.getPosts);

module.exports = router;
