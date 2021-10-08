const http=require('http');
const server=http.createServer((req,res) => {
    res.end("<h2>hello from the other side</h2>");


})
server.listen(8000,'127.0.0.1',()=>{
    console.log("listenning to the port number 8000");

})