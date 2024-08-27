const express = require('express');
const app = express();
require('dotenv').config();
const db=require('./Modules/db')

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('hello backend ')
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})