
const path=require('path')

const rootDir=require('../utility/path')

exports.getContactUs = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'))
    
}

exports.postContactUs = (req, res, next)=>{
    console.log(req.body)
    res.redirect('/success')
}

exports.postSuccess = (req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
}