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

const allowedOrigins = [
  "https://indian-made-mart-adt2.vercel.app",
  "http://localhost:5173" // optional for local dev
];


app.get('/',(req,res)=>{
    res.send('hello backend ')
})

app.use(bodyParser.json());
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like Postman)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true
}));
app.options('*', cors({
  origin: allowedOrigins,
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  credentials: true
}));
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