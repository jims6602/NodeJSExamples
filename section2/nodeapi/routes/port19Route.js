var path = require('path');
var scriptName = path.basename(__filename);
console.log( scriptName + '_____________________________________' );

const express = require("express");
const postController = require('../controllers/post19Controller');
const postValidator = require('../validators/post19Validator');

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/create_post', postValidator.createPost, postController.createPost);

module.exports = router;
