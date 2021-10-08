//www.google.com - welcome to my home page
//  /about - welcome to my about page
//  /contact - welcome to my contact page
//  /temp   - welcome to my temp page


const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
res.send("<h1>welcome to my home page</h1>");
res.send("<h1>welcome to my home page again</h1>")
//to send a multiple line of response at a time
//res.write("<h1>welcome to my home page</h1>");
//res.write("<h1>welcome to my home page again</h1>");
//res.send();
});
app.get('/about',(req,res)=>{
    res.send("<h3>welcome to my about page</h3>");
});
app.get('/contact',(req,res)=>{
    res.send("<h3>welcome to my contact page</h3>");
});
//to send a json data
app.get('/temp',(req,res)=>{
    res.send([
        {
        id:1,
        name : "kamal",
    },
    {
        id:1,
        name : "kamal",
    },
    {
        id:1,
        name : "kamal",
    },
    {
        id:1,
        name : "kamal",
    },

]);
});
app.listen(port,()=>{
    console.log(`listining the port number ${port}`);
})