const mongoose=require('mongoose');

//Defining the person schema

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true         //it means name hme chahiye hi chahiye
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true

    },

    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String

    },
    salary:{
        type:Number,
        required:true
    }
});
//create person model
const person = mongoose.model('person',personSchema)
module.exports=person;