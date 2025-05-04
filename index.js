const express = require('express');
const connectDB = require('./src/config/db');
const postRoutes = require('./src/routes/postRoutes');
const errorHandler = require('./src/middleware/errorHandler');
const cors = require('cors');
app.use(cors({
    origin: "https://tutam-naufalhadirasikhin-sbd9be.vercel.app",
}));

require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/posts', postRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));