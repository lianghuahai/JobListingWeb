const express = require('express')
const Router  = express.Router()

Router.get('/info',(req,res)=>{
    //cookie?
    return res.json({code:0})
})

module.exports=Router