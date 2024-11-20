const express=require('express');
const router=express.Router();
const person=require('./../models/Person')


router.post('/',async(req,res)=>{
    try{
      const data=req.body   //assuming the requestbody contains the person data
  
      //creating a new person document using the mongoose model
      const newPerson=new person(data);
  
      // saving the new person to the database
      const response= await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
    }
     
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'})
  
    }
  })


  router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        console.log('data fetched');
        res.status(400).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    
      }
})


router.get('/:work',async(req,res)=>{
    const work=req.params.work;               //Extract the work type from the URL parameter
   try{
    if(work=='chef' || work == 'manager' ||work=='waiter'){
      const response=await person.find({work:work});
      console.log("response fetched");
      res.status(200).json(response);
  
    }else{
      res.status(400).json({error: 'invalid work'})
    }
   }
   catch(err){
    console.log(err);
          res.status(500).json({error:'internal server error'})
      
   }
  })

  router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;//extract the id from the url parameter
        const updatedPersonData=req.body;       //updated data for the person


        const response=await person.findOneAndUpdate(personId,updatedPersonData,{
            new:true,                    //return the updated document
            runValidators:true           //run mongoose validation
            
        })

        if(!response){
            return res.status(404).json({error:'person not found'})
        }
        console.log('data updated')
        res.status(200).json(response)

        }
       
        catch(err){
            console.log(err);
              res.status(500).json({error:'internal server error'})
                  
               }

        
  })

  module.exports=router;