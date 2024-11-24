import express from 'express';
import sequelize from './config/connection.js'; 
import authRoutes from './routes/api/auth.js';
import memoirRoutes from './routes/api/memoir.js';
import preInterviewRoutes from './routes/api/preInterview.js';
import conversationRoutes from './routes/api/conversation.js';
import profileRoutes from './routes/api/profile.js'; 
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Serve static files from the frontend `dist` folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve static files for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/memoir', memoirRoutes);
app.use('/api/pre-interview', preInterviewRoutes);
app.use('/api/conversation', conversationRoutes);
app.use('/api/profile', profileRoutes);

// Serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error))

// Sync Sequelize with database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });

// Use the environment variable PORT or default to 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
