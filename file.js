// fs = file system
const fs  = require("fs");

// synchronous call
fs.writeFileSync("./test.txt", "Hey There Wassup !");

// asynchronous call
fs.writeFileSync(".test2.txt","Hey there async" , (err) => {}); 

// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// when we read the file asynchronously it does not returns teh result basically we can not store it in a variavble as we have done in synchronous 

fs.readFile("./contacts.txt","utf-8" , (err , result) => {
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
})

// asynchronous operations does not return anything 

// fs.appendFileSync("./test2.txt", new Date().getDate().toLocaleString());

// fs.unlinkSync("./test2.txt");

console.log(fs.statSync("./test.txt"));
