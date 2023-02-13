const path=require('path')

const express = require('express')

const router = express.Router();

const productControllers=require('../controllers/products')

router.use('/',productControllers.getProducts)

module.exports=router;