const express = require('express');
const app = express();
require('dotenv').config();
const db=require('./Modules/db')
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const AuthRouter=require('./Routers/AuthRouter')
const ProductRouter = require('./Routers/ProductRouter')
const UserRouter = require('./Routers/UserRouter')
const ProfileRouter = require('./Routers/ProfileRouter')
const CartRouter = require('./Routers/CartRouter')
const Fashion = require('./Routers/FashionRouter')
const path = require('path');



app.get('/',(req,res)=>{
    res.send('hello backend ')
})
const allowedOrigins = [
  "https://indian-made-mart-adt2.vercel.app", // your Vercel frontend
  "http://localhost:5173" // local dev
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman, curl, server-to-server
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error("CORS not allowed"), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Handle preflight OPTIONS request globally
app.options("*", cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));







app.use(bodyParser.json());

app.use('/auth',AuthRouter)
app.use('/product',ProductRouter)
app.use('/fashion',Fashion)
app.use('/user',UserRouter)
app.use('/profile',ProfileRouter)
app.use('/cart',CartRouter)
console.log(path.join(__dirname, 'ImagesBackend')); 
app.use('/ImagesBackend', express.static(path.join(__dirname, 'ImagesBackend')));

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})