

const express = require('express');

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))


app.use('/add-product',(req, res, next)=>{
    res.send('<form action="/product" method="POST"><br>title<br><input type="text" name="title"> </input> <br> size<br><input type="text" name="size"> </input><br> <button type="submit">Send</button> </form> ')
    
})



app.use('/product',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req, res, next)=>{
    
    res.send('<h3>Homepage</h3>')
})

app.listen(3000);