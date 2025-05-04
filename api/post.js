const postController = require('../src/controllers/postController');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        return postController.createPost(req, res);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}