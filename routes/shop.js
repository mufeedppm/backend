const express = require('express')

const router = express.Router();


router.use('/',(req, res, next)=>{
    
    res.send('<h3>Homepage</h3>')
})

module.exports=router;