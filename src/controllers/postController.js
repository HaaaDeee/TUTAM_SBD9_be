const Post = require('../models/Post');

// Mendapatkan semua post
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Membuat post baru
exports.createPost = async (req, res) => {
    try {
        const { name, title, content } = req.body;

        // Buat post baru
        const post = new Post({ name, title, content });
        await post.save();

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Menghapus post
exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        // Cari post berdasarkan ID
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Hapus post
        await post.remove();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};