
//without streaming
const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on("request",(req,res)=>{
    //var fs=require('fs');
    //fs.readFile('input.txt',(err,data)=>{
      //  if(err) return console.error(err)
    //    res.end(data.toString());
  //  })
  //server.listen(8000,"127.0.0.1");
//console.log('listenning to the port');

  //2nd way->streaming
//reading from a stream
//create a readable stream
//handle stream events->data,end and error


//const rstream=fs.createReadStream("input.txt");

//rstream.on('data',(chunkdata) =>{
    //res.write(chunkdata);
//});
//rstream.on('end',()=>{
  //  res.end();
//})


//3rd way
const rstream=fs.createReadStream("input.txt");
rstream.pipe(res);
})



//})

server.listen(8000,"127.0.0.1");
console.log('listenning to the port');