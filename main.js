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