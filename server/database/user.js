const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username:{
        required:true,
        type:String,
    },
    password:{
        required:true,
        type:String
    },email:{
        type:String,
        required:true
    }
});

module.exports={
    userSchema
};