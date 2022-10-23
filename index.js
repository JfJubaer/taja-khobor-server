const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

app.use(cors());


const categories = require('./Data/Categories.json');

app.get('/',(req,res)=>{
    res.send('Taja Is Running yoo');
})
app.get('/categories',(req,res)=>{
    res.send(categories);
})

app.listen(port,()=>{
    console.log('APi on the spot',port);
})