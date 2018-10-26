const express = require ('express');
const app=express();
const userRouter = require('./user.js')

app.use('/user',userRouter)

app.listen(9093,function(){
    console.log('node')
})