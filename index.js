console.log("Hello World!");
// this is a comment
//console.log("Iam learning Javascript!")

//Js Variables
//Variable declaration
var name = "Jael"
console.log(name);

//var is not advised  -- deprecated its mutable(means data can be changed)

// const -- used on immutable data
const name1 = "Ian";
console.log(name1);

//let keyword -- used on mutable data
let name2 = "Nathan";
console.log(name2);

//naming conventions
/*
-cannot start with a number
-give it a name that is relative to what it is doing

-use camelCase or snake_Case(underscore)
let veryLongVariableName = "Long Name"; //camelCase
let this_Is_Snake_Case = "alternative"; // snake case

-some special words(reserved keywords) cannot be used
*/
let Abstract = "hello";
console.log(Abstract);

// initialize a variable

let password; // initialization
const id = "";
//id = 1234567;

console.log(id);

console.log(password);// undefined

password = 12345678; // variable assignment

password = "password"

console.log(password);

//Data Types
console.log(2 + 2);
console.log(2 + "ABC");

//1.Strings -- data defined in a series of characters(alphabets)
// strings are in quotation marks -- single quotes or double quotes
// use single quotes best , double for html -- using both is an error

let message = "We are learning About javascript data types";
console.log(message);
console.log(typeof(message)); // typeof method

let user = 'mark';

console.log('The username is ' + user) // space is added inside the string (white spaces)
console.log('The username is ' +'' + user) // else + '' (add an empty string literal)

//2.Numbers (integer & float)
let num = 1;
console.log(num);
console.log(typeof(num));

// integers - whole numbers
// floats - have decimal points - fractions, decimals

let x = 10;
let y = 2.5;
console.log(typeof(x));
console.log(typeof(y));
console.log(x - y);

//3.Boolean -(truthy of falsy terms) -- True, False
let on = true;
let off = false;

//where to use - need a good control flow
let isAuthenticated = true;
console.log(isAuthenticated);


//4.Undefined - for an unassigned variable- used to represent a variable that has not been assigned a variable
let firstName; // declared not assigned
console.log(firstName)
console.log(typeof(firstName))
firstName = null; // use null over undefined
console.log(firstName)

let a = 1;
b = 7;
c = 9; // you can declare and assign
console.log(a + b + c);

// NON-PRIMITIVE DATA TYPES
//1.Objects - containers of dat represented in key value pairs, best way to store data as its not easily immutable\
//{} - have curly brackets

let obj = {
    username: 'Lionel Messi',
    age: 25,
    occupation: 'software developer',
    is_The_best: true,
    gender: null
}
console.log(obj);
console.log(obj.occupation);
console.log(obj.is_The_best);

//2. Array - unordered list that represent a collection of items
//[] use square braces
// the forst is index 0
let fruits = ['mango', 'apple', 'orange', 'peaches'];
console.log(fruits);