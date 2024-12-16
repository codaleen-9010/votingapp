const mongoose= require('mongoose');
const bcrypt = require('brypt');


const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true

    },

    age:{
        type:String,
        required:true
    },

    email:
    {
        type:String
    },

    mobile:{
        type:String
    },


    address:{
        type:String,
        required: true
    },

    aadharCardNum:{
        type:Number,
        required: true,
        unique: true
    },

    role:{
        type:String,
        enum:['voter','admin'],
        default:'voter'
    },

    isvoted:{
        type:boolean,
        default:false
    }

});

const User=mongoose.model('User',UserSchema);
module.export=User;