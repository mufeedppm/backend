const express = require('express')

const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    res.send('<form action="/admin/add-product" method="POST"><br>title<br><input type="text" name="title"> </input> <br> size<br><input type="text" name="size"> </input><br> <button type="submit">Send</button> </form> ')
    
})

router.post('/add-product',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/shop')
})

module.exports= router;