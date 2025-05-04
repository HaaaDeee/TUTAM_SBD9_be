const postController = require('../src/controllers/postController');

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.query; // Ambil parameter ID dari query
        req.params = { id }; // Simulasikan req.params untuk kompatibilitas
        return postController.deletePost(req, res);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}