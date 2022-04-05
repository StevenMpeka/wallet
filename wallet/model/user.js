const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
         unique: true 
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
})

module.exports=mongoose.model("user",userSchema)