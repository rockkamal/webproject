const EventEmitter=require('events');
const event=new EventEmitter;

//event.on("sayMyName",() =>{     //on meant for listenning
  //  console.log('my name is kamal');
//});

//event.on("sayMyName",() =>{
  //  console.log('your  name is ram');
//});

//event.on("sayMyName",() =>{
  //  console.log('your name is  shyam');
//});

//event.on("sayMyName",() =>{
  //  console.log('my name is aisha');
//});

//event.emit("sayMyName");    //create an event first then click on it


event.on("checkpage",(sc,msg) =>{
    console.log(" status code is ${sc} and page message is ${msg}");
})



event.emit("checkpage",200,'ok');