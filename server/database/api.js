const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})

module.exports={listSchema}