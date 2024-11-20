const express=require('express');
const app= express();

// app.use(function(req,res,next){
//     console.log("let learn about middleware");
//     next();
// });


app.use('express.json()');
app.use(express.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.send("hello we are going to learn express,its quite interesting topic");
})
app.get("/profile",function(req,res,next){
    // res.send("express is a npm package");
    return next(new Error("Something went wrong"))
})
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.status(500).send("somethi34ng went wrong")


})

app.listen(3001, function(){
    console.log("server is running on port")
})