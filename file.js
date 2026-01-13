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

// get to know about shortest JS program that is a empty file 
// It still has a window object and we are able to access all the functions in the global space and this functionality is given to us by Javascript Engine 
// JS also creates "this" keyword and at the global level "this" points to the "window" object 

// this === window at the global level thst is in the browser 

// Global Space: if we write anything outside the function that is what we call as "Globla Space".

var a = 10;
console.log(window.a);
console.log(a);
console.log(this.a);

// above written both statements logs the same output as in global space JS engine knows that weare referring to window object 
// So, SHORTEST PROGRAM in the JS is an empty file.
