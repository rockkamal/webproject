const express=require('express');
const app=express();
const port=4000;

//builtin middleware
app.use(express.static(path));

app.get('/',(req,res)=>{
res.send("<h1>welcome to my home page</h1>");
});



app.listen(port,()=>{
    console.log(`listing the port no at ${port}`);

});