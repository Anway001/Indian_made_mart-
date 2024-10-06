const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGODB_URL_LOCAL ;
mongoose.connect(mongoURI)

const db = mongoose.connection;

db.on ('connected',()=>{
    console.log('MongoDB connected')
})

db.on('error ',(err)=>{
    console.log('Error in MongoDB connection',err)
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected')
})

module.exports = db;