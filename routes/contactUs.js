const path=require('path')

const express = require('express')

const router = express.Router();

const contactController = require('../controllers/contact')

router.get('/contactUs',contactController.getContactUs)

router.post('/contactUs',contactController.postContactUs)

module.exports= router;