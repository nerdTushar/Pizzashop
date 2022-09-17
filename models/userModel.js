const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true,'Name Is Required']
    },
    email : {
        type : String,
        required : [true,'Email Is Required']
    },
    password : {
        type : String,
        required : [true,'Password Is Required']
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
},{timeStamps : true})

module.exports = mongoose.model('User',userSchema);