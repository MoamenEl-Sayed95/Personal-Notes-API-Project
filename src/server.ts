// Import required modules
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

// Load environment variables
dotenv.config();

// Set port and MongoDB URI
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || '';

// Start server and connect to MongoDB
const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI); // Connect to MongoDB
    console.log('✅ Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB');
    process.exit(1); // Exit on failure
  }
};

startServer(); // Initialize server