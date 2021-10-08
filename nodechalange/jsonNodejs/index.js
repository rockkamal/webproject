//object
const fs=require('fs');


//console.log(bioData.name);

//convert object to the json format


//const jsonData=JSON.stringify(bioData);    //{"name":"kamal","age":24,"role":"java"}
//console.log(jsonData); 

//convert json to object
//const objData=JSON.parse(jsonData);      //{ name: 'kamal', age: 24, role: 'java' }
//console.log(objData);

//2nd chalange
//convert to json
//and add to the another file
//and read the file
//again convert back json to object
//finally console.log()

const jsonData=JSON.stringify(bioData);        //convert object to json
fs.writeFile('json1.json',jsonData,(err)=>{    //add the json data into the file
console.log("done");
})
//read the file from json1.json

fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgdata=JSON.parse(jsonData);
    console.log(data);
    console.log(orgdata);
    
})





