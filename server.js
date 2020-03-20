 const express = require("express");
 const bodyParser = require("body-parser");
 
 const app = express();
 app.use(express.static("public"));
 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({extended : true}))

 var person1 = "Player A",person2 = "Player B";

 app.get("/",(req,res)=>{
    res.render("intro");
 });
 app.get("/game",(req,res)=>{
   res.render("index",{PlayerA:person1 , PlayerB:person2});
});
 app.post("/",(req,res)=>{
    person1 = req.body.PlayerA;
    person2 = req.body.PlayerB;
    res.redirect("/game");
 })
 app.listen(3000,()=>{
    console.log("server started");
 });