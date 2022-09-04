const express=require("express");
const app=express();
const path=require("path")

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });



/*
app.get("/",function(req,res){
    res.json({
        message:"Api Success"
    })
})
*/

// how to send the static file

app.listen(8080,function(){
    console.log(`Server Running `);
})