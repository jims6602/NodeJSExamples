var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

const express = require("express");
const postController = require('../controllers/post18Controller');

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/create_post', postController.createPost);

module.exports = router;
