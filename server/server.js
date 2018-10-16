const express = require ('express');
const mongoose = require('mongoose')
const DB_URL ='mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('good connection')
})
const User=mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

// User.create({
//     user:'imooc',
//     age:18
// }),function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// }

// User.remove({age:18},function (err,doc){
//     console.log(dpc)
// })

User.update({'user':'imooc'},{'$set':{age:26}},function (err,doc) {
    console.log(doc)
})
const app=express();
app.get('/',function(req,res){
    res.send('<h2>hello</h2>')
})
app.get('/data',(req,res)=>{
    User.find({},function(err,doc){
        return res.json(doc)
    })
    
})
// app.get()('/delete',(req,res)=>{
//     User.find({},function(err,doc){
//         return res.json(doc)
//     })
    
// })
app.listen(9093,function(){
    console.log('node')
})