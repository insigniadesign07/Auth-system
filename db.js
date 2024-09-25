const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from the .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;
