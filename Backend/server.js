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

app.use(bodyParser.json());
app.use(cors(
    "https://indian-made-mart-adt2.vercel.app/"
));
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