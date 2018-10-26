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
