// db.js
const mongoose = require('mongoose');
require('dotenv').config();

// Use this env variable in Render for MongoDB Atlas connection
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Event listeners
const db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB connection established.');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected.');
});

// Optional: close connection on app termination
process.on('SIGINT', async () => {
  await db.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});

module.exports = db;
