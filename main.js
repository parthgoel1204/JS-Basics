console.log('Hello World')
console.warn('Wrning!!')
console.error('Error!');


// let , const 

let age = 30 
age = 31 
console.log(age); // it logs 31 

const score = 10 
console.log(score);

// can't change value once assign and while using const you need to initialize 

// when do we use const and when do we use let
// we'll be using const for most of the variables if we know we are not going to change its value  


const name = "Roman";
const isNum = true;
const dec = 4.9;
const char = 'a';
const x = null;
let y;

// we can check type of every datatype using typeof()
// typeof(x) will be an object that is null .

console.log(`MY name is ${name} and I am ${age}`);

const s = "Hello world!"
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const str = "temperature , AQI , Delhi , 500"
console.log(str.split(','));

// studied about array 
// for adding in the beginning of an array we use unshift

const fruits = [ 'mango' , 'orange' , 'banana' ]
console.log(fruits);
fruits.unshift('papaya')
console.log(fruits);
console.log(Array.isArray(fruits));

// object
const person = {
    firstname : 'Roman',
    lastname : 'Reigns',
    address : 'Florida',
    work : 'professional wrestler',
}

// this is I learned new 
// Destructuring of object 
const {work} = person
console.log(work);

person.signedto = "WWE";
console.log(person);

// studied about object in arrays and how to access them and get them printed in the console 

// revised JSON Format 
// get to know about JSON.stringify() pass the object in array as the argument 

// For loop & WHILE Loop 

// for of loop 
const array = [ 5 , 7 , 8  , 9]
for(let i of array){
    console.log(i);
}

// High Order Array Methods 
// For each Loop , map , filter(allows us to create a new array based on an condition)

array.forEach(function (i) {
    console.log(i);
})

const todo = [
    {
        naam : "Prahalad",
        gaam : "Jaunpur",
        zinda: true
    },
    {
        naam : "Bablu",
        gaam : "Mirzapur",
        zinda: false
    },
    {
        naam : "Babbu",
        gaam : "Baliya",
        zinda: false
    }
]

const todoMapResult = todo.map(function (i) {
    return i.gaam
});

console.log(todoMapResult);

const todoFilterResult = todo.filter(function (i){
    return i.zinda == true;
}).map(function (j){
    return j.naam
});

console.log(todoFilterResult);

// if and else conditionals

const a = 25;
// const clr = a > 25 ? 'red' : 'green';
const clr = "blue";
console.log(clr);

switch (clr) {
    case 'red':
        console.log("red color it is !");
        break;
    case 'green':
        console.log("green it is!");
        break;
    default:
        console.log("It's nothing ");
        break;
}

// learned about functions and arrow functions and how arrow functions are handy in making things a bit clear 

// Constructor Function 
// function Person(first , last , dob){
//     this.first = first;
//     this.last = last;
//     this.dob = new Date(dob);
//     const birthYear = () => {
//         return this.dob.getFullYear();
//     }
//     this.getYear = birthYear;
//     this.getFullName = function() {
//         return `${this.first} ${this.last}`
//     }
// };
// Person.prototype.getFullDate = function(){
//     return this.dob.getDate();
// };

// using classes so that people coming to Javascript from different languages get familiar with it more easily 
// Writing using classes is prettier and more easier to read.
class Person {
    constructor(first , last , dob) {
         this.first = first;
        this.last = last;
        this.dob = new Date(dob);
    }

    getFullName() {
        return `${this.first} ${this.last}`
    }
}
const person1 = new Person('Sita' , 'Ram' , '1-1-0001');
// console.log(person1.getYear());
console.log(person1.getFullName());
// console.log(person1.getFullDate());

// ES6 it is basically ECMASCRIPT 2015  


// Had a revision of DOM basics and how to select elements using different methods that includes document.querySelectorAll() and document.getElementsBYId() and various similar stuff.

// Revised about window object it is there in the browser alsways 
// Nodelist is not an array but all array functionalities work on it.


// object literals

let user = {
    name: 'Parth',
    email: 'parth@abc.com',
    age: 45,
    code: 'heavy coding',
    // method
    login: function(){
        console.log("logged IN!");
    },
    blogs: [ {
        title: 'Why mac & cheese', likes: 30
    },
    {
        title: '10 things to make with marmite', likes: 50
    }],
    logBlogs(){
        this.blogs.forEach(blog => {
            console.log(blog.likes , blog.title);
        });
    }
}

console.log(user);
console.log(user.code);
console.log(user.age);
console.log(user['email']);

user.login();

// "this" keyword in the global context is known as the window object  
console.log(this);

// When we use an arrow function the value of "this" does not change from the value at was at the point in the code the arrow function is invoked 

// const blogs = [
//     {
//         title: 'Why mac & cheese', likes: 30
//     },
//     {
//         title: '10 things to make with marmite', likes: 50
//     }
// ]

// console.log(blogs);

user.logBlogs();

// MATH OBJECT 

console.log(Math);
console.log(Math.PI);

// random numbers

console.log(Math.round(Math.random() * 100));

// Primitive types are stored on the stack and reference types are stored on the heap 
// When we store object in heap it adds a pointer to that object in the stack 
// When we make a copy of the reference type we only make a copy of the pointer stored on the stack and no copy of the object or anything stored in the heap is created and if we update the object stored in the heap then both the pointers will be pointing ot that updated object unlike the behaviour in primitive types where even on updatng the variable to a new variable the value stored is same as the preious one 

let score1 = 100;
const score2 = score1;
score1 = 200;
// in the above scenario we have score2 = 100 stored in the stack and even after updating score1 later on score2 still remains the same 

// map filter reduce are Higher Order Functions
// Map is used to transform the array 

const arr = [1,2,3,4,5];

// transformation logic 
const double = (x) => {
    return x*2;
}

function binary(x){
    return x.toString(2);
}
const output = arr.map(double);

console.log(output);

const output2 = arr.map(binary);
console.log(output2);

// filter function is used to filter the values inside an array
function checkOdd(x){
 return x%2;
};

const output3 = arr.filter(checkOdd);
console.log(output3);

// Reduce is a function where you have to take all the elements of the array and come with a single element out of them as your result 
const answer = arr.reduce(function (acc,curr){
    acc += curr;
    return acc;
},0)
console.log(answer);

const answer1 = arr.reduce(function(acc,curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
},0);

console.log(answer1);

const users = [
    {firstname : "ak" , lastname: "bhai" , age: 34},
    {firstname : "bk" , lastname: "bhaiya" , age: 24},
    {firstname : "ck" , lastname: "bhaiya" , age: 29},
    {firstname : "dk" , lastname: "bhaiya" , age: 54}
]
const ans = users.reduce(function(acc,curr){
    if(curr.age < 30){
        acc.push(curr.firstname);
    }
    return acc;
},[])

console.log(ans);

// Hoisting in JS

// it can be defined as the phenomenon by which the functions and variables can be accessed in the js even before we have initialised them ,  without getting any error

// even before the execution of the first line memory is allocated to the variables and the functions 

// when we write arrow function so it behaves like a variable i.e., it will assign undefine to the function and not assign the whole function as it was doing at the time of normal function