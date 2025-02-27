const mongoose=require('mongoose')

const Schema=mongoose.Schema

const employeesSchema=new Schema({
    username:{
        type:"String",
        required:true
    },
    gmail:{
        type:"String",
        required:true
    },
    password:{
        type:"String",
        required:true
    },
    designation:{
        type:"String",
        required:true
    },
    
},
{timestamps:true}) 

exports.employeesSchema=mongoose.model('Employee',employeesSchema)
