const express = require('express')
const app=express();
const path=require('path')

app.use(express.json());
app.use(express.urlencoded({extended:true}));// by using these lines we cand handle the data of form in backend
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
//by using tjis line we can access form

app.get("/",function(req,res){
    res.render("index");
});

app.listen(3001,function(){
    console.log("its started or runnig");
})