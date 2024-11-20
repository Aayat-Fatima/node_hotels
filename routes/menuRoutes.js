const express=require('express');
const router=express.Router();

const menu=require('./../models/menu');


router.post('/',async(req,res)=>{
    try{
      const data=req.body   //assuming the requestbody contains the person data
  
      //creating a new person document using the mongoose model
      const newMenu=new menu(data);
  
      // saving the new person to the database
      const response= await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
     
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
  
    }
  })

//Get themethod to get the person


router.get('/',async(req,res)=>{
    try{
        const data=await menu.find();
        console.log('data fetched');
        res.status(400).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    
      }
})

module.exports=router