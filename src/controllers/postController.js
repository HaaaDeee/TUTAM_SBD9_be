const posts = []; // Simpan data sementara di array (atau gunakan database)

// Mendapatkan semua post
exports.getPosts = (req, res) => {
    res.status(200).json(posts);
};

// Membuat post baru
exports.createPost = (req, res) => {
    const { name, title, content } = req.body;

    if (!name || !title || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newPost = {
        id: posts.length + 1,
        name,
        title,
        content,
    };

    posts.push(newPost);
    res.status(201).json(newPost);
};

// Menghapus post
exports.deletePost = (req, res) => {
    const { id } = req.params;
    const postIndex = posts.findIndex((post) => post.id === parseInt(id));

    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    posts.splice(postIndex, 1);
    res.status(200).json({ message: 'Post deleted successfully' });
};