

const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('Middleware 1')
    next();
})

app.use((req, res, next)=>{
    console.log('Middleware 2')
    res.send({ "key1": "value" })
})



app.listen(3000);