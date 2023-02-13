
const fs= require('fs');

const path=require('path')

const express = require('express');

const bodyParser = require('body-parser')

const app = express();

const adminRoutes=require('./routes/admin')

const shopRoutes= require('./routes/shop')


const contactRoutes= require('./routes/contactUs')

// const rootDir=require('../utility/path')

const contactController = require('./controllers/contact')

const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes)

app.use('/shop',shopRoutes)

app.use(contactRoutes)

app.post('/success',contactController.postSuccess)

app.use(errorController.get404)




app.listen(3000);