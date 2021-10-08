const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));
app.get('/',(req,res)=>{
    res.send("<h1>welcome to the home page</h1>");
});
app.get('/about',(req,res)=>{
res.send("<h2>welcome to the about page</h2>");
});
app.get('/weather',(req,res)=>{
res.send("<h2>welcome to the weather page</h2>");
});

app.get('*',(req,res)=>{
    res.send("<h2>404 error page oops!!</h2>");
});
app.listen(port,()=>{
    console.log(`listining to the port at ${port}`);
});