const express=require('express')
const app=express();
const db=require('./db')
const person=require('./models/Person');
const menu=require('./models/menu');

const bodyParser=require('body-parser');
app.use(bodyParser.json())    //req.body mei store krta h


app.get('/', function(req,res) {
    res.send("Welcome the hotels sir,how i can help you?")
})




const menuRoutes=require('./routes/menuRoutes')
app.use('/menu',menuRoutes)

const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes)
app.listen(3000,()=>{
    console.log("listening on the port")
})












// const data=req.body   //assuming the requestbody contains the person data

    //creating a new person document using the mongoose model
    // const newPerson=new person(data);

    // newPerson.save((error,person)=>{
        // if(error){
        //     console.log("error saving person",error);
        //     res.status(500).json({error: "internal server data"})
        // }else{
        //     console.log("data successfully");
        //     res.status(200).json(person)
        // }
    // })
    // newPerson.name=data.name;
    // newPerson.age=data.age;
    // newPerson.work=data.work;
    // newPerson.mobile=data.mobile;
    // newPerson.Address=data.Address;