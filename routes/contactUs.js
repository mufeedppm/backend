const path=require('path')

const express = require('express')

const router = express.Router();

const rootDir=require('../utility/path')

router.get('/contactUs',(req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'))
    
})

router.post('/contactUs',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/success')
})

module.exports= router;