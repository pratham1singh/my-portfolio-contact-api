const mongoose = require('mongoose')

const schema1= new mongoose.Schema({
    "name":{
        required:true,
        type:String,
        trim:true
    },
    "email":{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    "number":{
        type:String,
        trim:true,
        required:true
    },
    "postfolio":{
        type:String,
        trim:true,
        default:NaN
    }

})
const users = new mongoose.model('users',schema1)
module.exports= users;