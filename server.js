const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.json({
        message:"Api Success"
    })
})

app.listen(8080,function(){
    console.log(`Server Running `);
})