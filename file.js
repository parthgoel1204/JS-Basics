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

// Everything in JavaScript happens inside an "execution context".
// Execution context is created in 2 phases 
// 1. memory creation phase 
// 2. code execution phase
// When a function is invoked a whole new execution context is created specifically for that function 
// JS Engine manages everything like creation of execution context , phases and deletion beautifully by its "CALL STACK".
// CALL STACK maintains the order of execution of execution contexts.
/* Other names of call stack are as follows :
1. Execution Context Stack
2. Program Stack
3. Control Stack
4. Machine Stack
5. Runtime Stack */

// Undefined is like a special placeholder for the variables to get them placed in the memory.
// This placeholder is kept for the time being until the variable is assigned some other value.
// JavaScript is loosely typed language i.e., it does not attaches its variables to any specific datatype.

var a;
console.log(a);
a = 10;
console.log(a);
a = "hello";
console.log(a);
// Loosely Typed Language are also known as "Weakly Typed Language"

// Not Defined is when a variable is not declared in the program.

function a(){
    console.log(b);
}
var b = 10;
a();

// ON calling above function logs b as 10 because it can access b outside its local scope because of its "global scope".
// "Lexical Environment" is the local memory along with the reference to the lexical environment of its parent.
// At the global level this reference to lexical environment of parents points to "NULL".
// The chain of lexical environments is called the "SCOPE CHAIN" and it defines whether a variable or a function is presnt inside the scope or not.

let act = 10;

// when we declare a variable using var memory was allocated and it was allocated to global object but in case of "let" after the memory allocation it was allocated to "script" i.e., in case of "let & const" these are stored in adifferent memory space than the "var". Moreover we are not able to access this memory space of "let & const" before we have put some value in them.

// "TEMPORAL DEAD ZONE" is the time since when the let variable was hoisted and till it is initialised some value .
// Whenever we try to access a variable inside the temporal dead zone it leads to the "REFERENCE ERROR"

// ALso variables declared through let & const can't be accessed through window object as they are in a separate memory space.

// "{}" these curlies are known as "BLOCK". Block is also known as "COMPOUND STATEMENT".
// Block can be used when JS expects a single statementso it groups multiple statements and make them act as a single statement.

// "BLOCK SCOPE" is defines as all the variables & functions that we can access inside the block.
// "Let & const" are block scoped.

// Shadowing in JS refers to the following statements
var a = 100;
{
    var a = 10;
    console.log(a);
}

// "a" in block cope shadows the "a = 100". Outside the block it will again log a as 100.

// let a = 10;
// {
//     var a = 20;
// }
// the above statements lead to illegal shadowing.