const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Route to create a new post
router.post('/post', postController.createPost);
router.get('/posts', postController.getPosts);
router.delete('/post/:id', postController.deletePost);

module.exports = router;