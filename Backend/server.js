const express = require('express');
const app = express();
require('dotenv').config();
const db=require('./Modules/db')
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const AuthRouter=require('./Routers/AuthRouter')
const ProductRouter = require('./Routers/ProductRouter')

app.get('/',(req,res)=>{
    res.send('hello backend ')
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter)
app.use('/product',ProductRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})