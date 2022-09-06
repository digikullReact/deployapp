const express=require("express");
const app=express();
const path=require("path");
const { RootRouteController } = require("./controllers/main.controller");
const ErrorMiddleware = require("./middlewares/commonErrorHandler");
///addedd

//app.use(express.static('dist'));
/*
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
  */



/*
app.get("/",function(req,res){
    res.json({
        message:"Api Success"
    })
})
*/

// how to send the static file

app.get("/",function(req,res){
    res.json({
        message:"Checking the ci cd"
    })

})

app.get("/chec",function(req,res){
    res.json({
        message:"All good"
    })

})


app.get("/data",RootRouteController)


app.use(ErrorMiddleware)

app.listen(8080,function(){
    console.log(`Server Running `);
})