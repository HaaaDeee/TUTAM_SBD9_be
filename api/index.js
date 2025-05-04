const express = require('express');
const connectDB = require('../src/config/db');
const postRoutes = require('../src/routes/postRoutes');
const errorHandler = require('../src/middleware/errorHandler');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: "https://tutam-naufalhadirasikhin-sbd9be.vercel.app",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/posts', postRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;