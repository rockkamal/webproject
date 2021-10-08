const path=require('path');
const express=require('express');
const app=express();

//relative absolute path
//console.log(__dirname);
const staticpath=path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(staticpath));
app.get("/",(req,res)=>{
    res.send("<h3>hello world from the express</h3>");
});
app.get("/about",(req,res)=>{
    res.render('index.html')
});
app.listen(8000,()=>{
    console.log("listining to the port at 8000");
});

